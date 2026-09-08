import Image from 'next/image';
import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  Check,
  Clock3,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Target,
  UsersRound,
} from 'lucide-react';
import { PlacementTest } from './placement-test';

export default function Home() {
  const whatsappUrl = 'https://wa.me/523312502411?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20clases%20de%20R%26R%20Ingl%C3%A9s.';

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="R&R Inglés, inicio">
          <span className="brand-mark" aria-hidden="true">R<span>&</span>R</span>
          <span className="brand-copy"><strong>R&R</strong><small>INGLÉS</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#clases">Clases</a>
          <a href="#metodo">Nuestro método</a>
          <a className="nav-facebook" href="https://www.facebook.com/p/RR-Ingl%C3%A9s-100050989914747/" target="_blank" rel="noreferrer"><ExternalLink size={15} /> Facebook</a>
          <a className="nav-cta" href="#examen">Examen de ubicación</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <Image
          src="/rr-ingles-clase.png"
          alt="Profesor de inglés trabajando de forma cercana con un grupo pequeño de alumnos"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow"><Sparkles size={16} /> Inglés a tu ritmo, atención de verdad</div>
          <h1>Aprende inglés con la confianza de sentirte acompañado.</h1>
          <p>Clases dinámicas en grupos pequeños, con un trato cercano y un plan pensado para ti.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#examen">Hacer examen de ubicación <ArrowRight size={18} /></a>
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Escribir por WhatsApp</a>
          </div>
          <div className="hero-facts" aria-label="Características de las clases">
            <span><UsersRound size={18} /> Grupos reducidos</span>
            <span><Clock3 size={18} /> Horarios flexibles</span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Ventajas de R&R Inglés">
        <p><strong>Atención personalizada</strong><span>Avanza con acompañamiento constante.</span></p>
        <p><strong>Profesores capacitados</strong><span>Aprende con claridad y práctica real.</span></p>
        <p><strong>Preparación integral</strong><span>TOEFL, IELTS, Cambridge y Piense II.</span></p>
      </section>

      <section className="section classes-section" id="clases">
        <div className="section-heading">
          <span className="section-kicker">Elige cómo aprender</span>
          <h2>Un ritmo que sí cabe en tu semana.</h2>
          <p>La misma atención cercana en dos formatos, para que avances con constancia sin descuidar tus actividades.</p>
        </div>
        <div className="plans-grid">
          <article className="plan-card plan-featured">
            <span className="plan-label">Ideal para concentrar tu avance</span>
            <div className="plan-icon"><CalendarDays /></div>
            <h3>Curso sabatino</h3>
            <p className="plan-time"><strong>3 horas</strong> cada sábado</p>
            <ul>
              <li><Check /> Práctica intensiva en una sola sesión</li>
              <li><Check /> Actividades dinámicas y conversación</li>
              <li><Check /> Seguimiento personal en grupo pequeño</li>
            </ul>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Preguntar por disponibilidad <ArrowRight size={17} /></a>
          </article>
          <article className="plan-card">
            <span className="plan-label">Ideal para crear el hábito</span>
            <div className="plan-icon"><Clock3 /></div>
            <h3>Curso entre semana</h3>
            <p className="plan-time"><strong>1 hora</strong> al día</p>
            <ul>
              <li><Check /> Sesiones breves y constantes</li>
              <li><Check /> Horarios flexibles según tu ritmo</li>
              <li><Check /> Retroalimentación clase a clase</li>
            </ul>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Conocer horarios <ArrowRight size={17} /></a>
          </article>
        </div>
      </section>

      <section className="method-section" id="metodo">
        <div className="method-copy">
          <span className="section-kicker section-kicker-light">Nuestra diferencia</span>
          <h2>Aquí no eres uno más del salón.</h2>
          <p>Trabajamos con pocos alumnos para conocer tu avance, resolver tus dudas y darte más oportunidades de hablar en cada clase.</p>
          <blockquote>“Más participación, más confianza y un acompañamiento que se nota.”</blockquote>
        </div>
        <div className="method-steps">
          <article><span>01</span><div><UsersRound /><h3>Grupos reducidos</h3><p>El profesor tiene tiempo para escucharte, corregirte y acompañarte.</p></div></article>
          <article><span>02</span><div><MessageCircle /><h3>Clases dinámicas</h3><p>Practicas el idioma en situaciones útiles, no solo memorizas reglas.</p></div></article>
          <article><span>03</span><div><Target /><h3>Objetivos personales</h3><p>El plan se adapta a tu nivel, ritmo y motivo para aprender inglés.</p></div></article>
        </div>
      </section>

      <section className="cert-section">
        <div className="cert-intro">
          <span className="section-kicker">Preparación especializada</span>
          <h2>También te preparamos para dar el siguiente paso.</h2>
          <p>Fortalece las habilidades y estrategias que necesitas para presentar certificaciones y exámenes académicos.</p>
        </div>
        <div className="cert-list" aria-label="Certificaciones y exámenes">
          <span><GraduationCap /> TOEFL</span>
          <span><BookOpenCheck /> IELTS</span>
          <span><GraduationCap /> Cambridge</span>
          <span><BookOpenCheck /> Piense II</span>
        </div>
      </section>

      <section className="test-section" id="examen">
        <div className="test-intro">
          <span className="section-kicker section-kicker-light">Examen de ubicación</span>
          <h2>Descubre desde dónde comenzar.</h2>
          <p>Responde cinco preguntas breves y recibe una orientación inicial de tu nivel. Al terminar podremos ayudarte a elegir el plan más conveniente.</p>
          <div className="test-meta">
            <span><Clock3 /> 3 minutos</span>
            <span><Check /> Resultado inmediato</span>
          </div>
        </div>
        <PlacementTest />
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-card">
          <div className="contact-heading">
            <span className="section-kicker">Da el primer paso</span>
            <h2>Cuéntanos qué quieres lograr con tu inglés.</h2>
            <p>Con gusto te orientamos para encontrar el grupo, horario y nivel adecuados para ti.</p>
          </div>
          <div className="contact-details">
            <a className="whatsapp-contact" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle /><span><small>WhatsApp</small>Escríbenos al 33 1250 2411</span></a>
            <a href="tel:+523312502411"><Phone /><span><small>Teléfono</small>Llámanos al 33 1250 2411</span></a>
            <a href="mailto:ricardoramos11@yahoo.com"><Mail /><span><small>Correo</small>ricardoramos11@yahoo.com</span></a>
            <a href="https://www.bing.com/maps?q=Av.+Presidentes+1994,+Lomas+del+Paradero,+Guadalajara,+Jalisco+44840" target="_blank" rel="noreferrer"><MapPin /><span><small>Visítanos</small>Av. Presidentes 1994, Lomas del Paradero, Guadalajara, Jal.</span></a>
          </div>
          <a className="facebook-spotlight" href="https://www.facebook.com/p/RR-Ingl%C3%A9s-100050989914747/" target="_blank" rel="noreferrer">
            <span className="facebook-icon">f</span>
            <span><small>Noticias, fechas y nuevos cursos</small><strong>Sigue a R&R Inglés en Facebook</strong></span>
            <ExternalLink size={20} />
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio" aria-label="R&R Inglés, volver al inicio">
          <span className="brand-mark" aria-hidden="true">R<span>&</span>R</span>
          <span className="brand-copy"><strong>R&R</strong><small>INGLÉS</small></span>
        </a>
        <p>Inglés personalizado para avanzar con confianza.</p>
        <a className="facebook-link" href="https://www.facebook.com/p/RR-Ingl%C3%A9s-100050989914747/" target="_blank" rel="noreferrer"><ExternalLink size={18} /> Facebook</a>
      </footer>
    </main>
  );
}
