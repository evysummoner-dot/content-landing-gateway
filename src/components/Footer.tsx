
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stream-darkBlue text-white pt-16 pb-8">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-white font-display text-2xl font-bold">
                Tel<span className="text-stream-red">STREAM</span>
              </span>
            </div>
            <p className="text-white/70 mb-6">
              Acesse todo o conteúdo que você ama em um só lugar por um preço acessível.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-stream-red transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 rounded-full bg-white/30"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Início', 'Planos', 'Dispositivos', 'Contato', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Suporte</h4>
            <ul className="space-y-3">
              {['Centro de Ajuda', 'Termos de Uso', 'Privacidade', 'Como Funciona', 'Reembolso'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Contato</h4>
            <ul className="space-y-3 text-white/70">
              <li>contato@telstream.com.br</li>
              <li>(11) 91234-5678</li>
              <li>
                <a href="#" className="text-stream-red hover:underline">
                  Fale com nossa equipe
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TelSTREAM. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
