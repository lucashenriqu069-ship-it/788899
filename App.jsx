                  whileHover={{ scale: 1.1, y: -10 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="stat-number"
                    animate={{ 
                      textShadow: [
                        '0 0 10px rgba(0, 204, 255, 0.5)',
                        '0 0 20px rgba(255, 0, 128, 0.5)',
                        '0 0 10px rgba(0, 204, 255, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="contact-section" id="contato">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Vamos Conversar?</h2>
            <p className="section-subtitle">
              Pronto para levar sua presença digital ao próximo nível? 
              Entre em contato conosco e vamos criar algo incrível juntos.
            </p>
          </motion.div>
          
          <div className="contact-content">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>contato@realcodestudio.com.br</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Telefone</h4>
                  <p>(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Localização</h4>
                  <p>São Paulo, SP - Brasil</p>
                </div>
              </div>
            </motion.div>
            
            <motion.form 
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="form-group">
                <label>Nome</label>
                <motion.input 
                  type="text" 
                  placeholder="Seu nome"
                  whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)' }}
                />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <motion.input 
                  type="email" 
                  placeholder="seu@email.com"
                  whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)' }}
                />
              </div>
              
              <div className="form-group">
                <label>Mensagem</label>
                <motion.textarea 
                  placeholder="Conte-nos sobre seu projeto..."
                  whileFocus={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)' }}
                />
              </div>
              
              <motion.button 
                type="submit"
                className="submit-button"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(0, 102, 255, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Mensagem
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <motion.div 
              className="footer-logo"
              whileHover={{ scale: 1.1, rotateY: 180 }}
            >
              <span className="logo-real">REAL</span>
              <span className="logo-code">CODE</span>
              <span className="logo-studio">STUDIO</span>
            </motion.div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Links Rápidos</h4>
                <a href="#home">Home</a>
                <a href="#portfólio">Portfólio</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contato</a>
              </div>
              
              <div className="footer-section">
                <h4>Contato</h4>
                <p>contato@realcodestudio.com.br</p>
                <p>(11) 99999-9999</p>
                <p>São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Real Code Studio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Componente Principal da Aplicação
function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <MainSite key="main" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

