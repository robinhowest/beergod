require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
 
const app = express() 

//config json response
app.use(express.json())

const cors = require('cors');

app.use(cors()); // Permite todas as origens


//models
const User = require('../../models/User.cjs')

//open route / public route
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Bem vindo a nossa Api!' })
})

//private route 
app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id

  //check is user exists
  const user = await User.findById(id, '-password')

  if (!user) {
    res.status(404).json({ msg: 'usuario nao encontrado'})
  }

  res.status(200).json({ user })
})

function checkToken(req, res, next) {
  const authHead = req.headers['authorization']
  const token = authHead && authHead.split(" ")[1]

  if (!token) {
    return res.status(401).json({ msg: 'Acesso negado'})
  }

  try {

    const secret = process.env.SECRET

    jwt.verify(token, secret)

    next()

  } catch(error) {
    res.status(400).json({ msg: 'Token invalido'})
  }
}

// register user
app.post('/auth/register', async (req, res) =>{
  const { 
    firstName, lastName, phone, address, houseNumber, state, city, postalCode, email, password, confirmpassword 
  } = req.body

  //validation
  if(!firstName) {
    return res.status(422).json({ msg: 'o nome é obrigatorio' })
  }

  if(!email) {
    return res.status(422).json({ msg: 'email é obrigatorio' })
  }

  if (!password) {
    return res.status(422).json({ msg: 'A senha é obrigatória' });
  }

  if (password !== confirmpassword) {
    return res.status(422).json({ msg: 'As senhas não coincidem' });
  }


  //check user
  const userExists = await User.findOne({ email: email })
  
  if (userExists) {
    return res.status(422).json({ msg: 'Por favor, utilize outro email' })
  }
   
  //create password
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

  //create user 
  const user = new User({
    firstName, 
    lastName, 
    phone, 
    address, 
    houseNumber, 
    state, 
    city, 
    postalCode, 
    email, 
    password: passwordHash, 
    confirmpassword
  })

  try {
    await user.save()
    res.status(201).json({msg:'Usuario criado com sucesso'})
  } catch {
    res.status(500).json({ msg:'aconteceu um erro de servidor'})
  }
})

//login user
app.post("/auth/login", async (req, res) => {
  const {email, password} = req.body
  //validations
  if(!email) {
    return res.status(422).json({ msg: 'email é obrigatorio' })
  }

  if(!password) {
    return res.status(422).json({ msg: 'a senha é obrigatoria' })
  }

  //check is user exist
  const user = await User.findOne({ email: email })
  
  if (!user) {
    return res.status(404).json({ msg: 'Usuario nao encontrado' })
  }

  //check if pasword match
  const checkPassword = await bcrypt.compare(password, user.password)

  if (!checkPassword) {
    return res.status(422).json({ msg: 'senha invalida' })
  }

  try {
    const secret = process.env.SECRET

    const token = jwt.sign({
      id: user._id
    }, secret,     
  )
  return res.status(200).json({ msg: 'Autenticaçao realizada com sucesso', token, user })
  } catch (error) {
    console.log(error)

    return res.status(500).json({ msg: 'Aconteceu um erro no servidor, tente novamente mais tarde!'})
  }
})

//credenciais
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.fdtwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('conectou com o banco'))
    .catch((err) => console.log(err))
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});