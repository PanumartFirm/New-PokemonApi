const request = require('supertest')
const chai = require('chai')
const app = require('../app')


chai.should()

describe('Pokemon API,' , () => {
        describe('GET /', () => {       //ระบุ Methor and path
                it('should return 200 OK with "Hello world"',(done) => {
                    request(app).get('/')
                    .expect(200)
                    .end((err,res) => {
                        res.body.should.deep.equal({ message: 'Hello world'})
                        done()
                    })
                })
        })   
        describe('GET /pokemon/:id', () => {
                it('should return 200 OK with a pokemon',(done)=>{
                    request(app).get('/pokemon/1')
                    .expect(200)
                    .end((err,res) => {
                        res.body.should.to.be.a('object')
                        res.body.should.have.property('id')
                        res.body.should.have.property('name')
                        res.body.should.have.property('type')
                        done()
                    })
                })

                it('should return 400 and Bad request',(done) =>{
                    request(app).get('/pokemon/99')
                    .expect(400)
                    .end((err,res) => {
                        res.body.error.should.equal('The pokemon could not be found')
                        // res.body.should.not.have.property(name)
                        done()
                    })
                })
        })

        describe('POST /pokemon', () => {
            it('shouble return 201 Created and have new pokemon ',(done )=>{
                    request(app).post('/pokemons')
                    .send ({name : "Unknown",type: "Psysic"})
                    .set('Accept','application/json')
                    .expect(201,done)   
                    })

            it('shouble return 400 Bad Request when missed requied fields ',(done )=>{
                request(app).post('/pokemons')
                .expect(400)
                .end((err,res) => {
                    res.body.error.should.equal('Insuffucuent paramiters : name and type are required parameter') 
                    done()
                })
            })
            
        })

         describe('PUT /pokemon/:id' ,()=> {
            it ('shouble return 200 OK and pokemon has types2 ',(done) =>{
                request(app).put('/pokemon/4')
                .send ({type2: "dark"})
                .set('Accept','application/json')
                .expect(200,done)   
            })
            it ('shouble return 400 Bad Request when try to update not exited pokemon ',(done) =>{
                request(app).put('/pokemon/:id')
                .expect(400)
                .end((err,res) => {
                    res.body.error.should.equal('Insuffucuent paramiters : type2 is required parameter') 
                    done()
                })
            })
         })

         describe('Intergration Test()', () => {
             it('GET /pokemons shouble return list of pokemons', (done) =>{
                 request('http://localhost:3000').get('/pokemons')
                 .expect(200)
                 .end((err ,res ) => {
                res.body.should.be.have.a('array')
                     done()
                 })
             })
         })
        
})
