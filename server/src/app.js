const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule')
var db = mongodb_conn_module.connect()

var Post = require("../models/post")

app.get('/posts', (req, res) => {
  Post.find({}, 'title description lat long', function (error, posts) {
		if (error) { console.error(error); }

		try {
			res.send({
				posts: posts
			})
		} catch (e) { console.error(e) }
	}).sort({_id:-1})
})

app.post('/add_post', (req, res) => {
	var db = req.db
	var title = req.body.title
  var description = req.body.description
	var date = new Date(req.body.date)
  var lat = req.body.lat
  var long = req.body.long
	var new_post = new Post({
		title,
    description,
    date,
    lat,
    long
	})

	new_post.save(function (error) {
		if (error) {
			console.error(error)
		}

		try {
			res.send({
				success: true
			})
		} catch (e) { console.error(e) }
	})
})

app.put('/posts/:id', (req, res) => {
	var db = req.db;

	try {
		Post.findById(req.params.id, 'title description date lat long', function (error, post) {
			if (error) { console.error(error); }

			post.title = req.body.title;
			post.description = req.body.description;
			post.date = new Date(req.body.date);
			post.lat = req.body.lat;
			post.long = req.body.long
			post.save(function (error) {
				if (error) {
					console.error(error)
				}
				res.send({
					success: true
				})
			})
		})
	} catch (e) { console.error(e) }
})

app.delete('/posts/:id', (req, res) => {
	var db = req.db;
	try {
		Post.remove({
			_id: req.params.id
		}, function(err, post){
			if (err)
				res.send(err)
			res.send({
				success: true
			})
		})
	} catch (e) { console.error(e) }
})

app.get('/post/:id', (req, res) => {
	var db = req.db;
	try {
		Post.findById(req.params.id, 'title description date lat long', function (error, post) {
			if (error) { console.error(error); }
			res.send(post)
		})
	} catch (e) { console.error(e) }
})

app.listen(process.env.PORT || 8081)