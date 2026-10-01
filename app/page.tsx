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

const whatsappUrl =
  'https://wa.me/523312502411?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20clases%20del%20Instituto%20R%26R%20Ingl%C3%A9s.';
const placementUrl =
  'https://wa.me/523312502411?text=Hola%2C%20quiero%20solicitar%20un%20examen%20de%20ubicaci%C3%B3n%20de%20ingl%C3%A9s.';

const faqs = [
  {
    question: '¿Necesito conocimientos previos?',
    answer:
      'No. Contamos con grupos para diferentes niveles y podemos orientarte para que empieces desde el punto adecuado.',
  },
  {
    question: '¿Cómo sé qué nivel me corresponde?',
    answer:
      'Puedes realizar un examen de ubicación. Con el resultado y una breve orientación te recomendaremos el grupo más conveniente.',
  },
  {
    question: '¿Qué modalidad puedo elegir?',
    answer:
      'Puedes estudiar en curso sabatino, con una sesión de tres horas, o en curso diario entre semana, con una hora por día.',
  },
  {
    question: '¿Cuáles son los horarios de atención?',
    answer:
      'Entre semana atendemos de 8:00 a. m. a 8:00 p. m. y los fines de semana de 8:00 a. m. a 3:00 p. m.',
  },
];

const notices = [
  {
    src: '/avisos/aviso-13-octubre-3pm.webp',
    width: 768,
    height: 1376,
    date: '13 de octubre',
    label: 'Sesión informativa',
    alt: 'Aviso del Instituto R&R Inglés: no te lo pierdas, 13 de octubre de 3 a 4 p. m., en Av. Presidentes 1994.',
  },
  {
    src: '/avisos/aviso-17-octubre.webp',
    width: 714,
    height: 1279,
    date: '17 de octubre',
    label: 'Sabatino',
    alt: 'Aviso del Instituto R&R Inglés: 17 de octubre, de 12 a 3 p. m., sabatino.',
  },
  {
    src: '/avisos/aviso-19-octubre.webp',
    width: 714,
    height: 1279,
    date: '19 de octubre',
    label: 'Sesión de apertura',
    alt: 'Aviso del Instituto R&R Inglés: 19 de octubre, de 8 a 9 a. m., sesión de apertura matutina.',
  },
  {
    src: '/avisos/aviso-13-octubre-7pm.webp',
    width: 1024,
    height: 1029,
    date: '13 de octubre',
    label: 'Clase especial',
    wide: true,
    alt: 'Aviso del Instituto R&R Inglés: asegura tu lugar el 13 de octubre, clase especial de 7 a 8 p. m.',
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand${footer ? ' footer-brand' : ''}`}
      href="#inicio"
      aria-label="Instituto R&R Inglés, ir al inicio"
    >
      <Image
        className="brand-logo"
        src="/instituto-rr-logo-oficial.png"
        width={56}
        height={56}
        alt=""
        aria-hidden="true"
      />
      <span className="brand-copy">
        <strong>Instituto R&R Inglés</strong>
        <small>Inglés Sin Límites</small>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Brand />
        <nav aria-label="Navegación principal">
          <a href="#clases">Modalidades</a>
          <a href="#avisos">Avisos</a>
          <a href="#preguntas">Preguntas</a>
          <a className="nav-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          <a className="nav-cta" href="#examen">Examen de ubicación</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-media">
          <Image
            src="/instituto-rr-fachada-portada.png"
            alt="Fachada del Instituto R&R Inglés con su nombre, el lema Inglés Sin Límites y el celular 33 1250 2411"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow"><Sparkles size={16} /> Aquí, cada alumno cuenta</div>
          <h1>Instituto R&R Inglés</h1>
          <p className="hero-subtitle">Inglés Sin Límites</p>
          <p className="hero-description">Aprende con grupos pequeños, atención cercana y un plan que parte de tu nivel y tus objetivos.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#examen">Examen de ubicación <ArrowRight size={18} /></a>
            <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
          </div>
          <div className="hero-facts" aria-label="Características de las clases">
            <span><UsersRound size={18} /> Grupos reducidos</span>
            <span><Clock3 size={18} /> Horarios flexibles</span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Ventajas del Instituto R&R Inglés">
        <p><strong>Atención personalizada</strong><span>Avanza con acompañamiento constante.</span></p>
        <p><strong>Profesores capacitados</strong><span>Aprende con claridad y práctica real.</span></p>
        <p><strong>Preparación integral</strong><span>TOEFL, IELTS y Cambridge.</span></p>
      </section>

      <section className="section classes-section" id="clases">
        <div className="section-heading">
          <span className="section-kicker">Elige cómo aprender</span>
          <h2>Un ritmo que sí cabe en tu semana.</h2>
          <p>La misma atención cercana en dos formatos, para que avances con constancia sin descuidar tus actividades.</p>
        </div>
        <div className="plans-grid">
          <article className="plan-card">
            <span className="plan-label">Ideal para crear el hábito</span>
            <div className="plan-icon"><Clock3 /></div>
            <h3>Diario</h3>
            <p className="plan-time"><strong>1 hora</strong> al día, entre semana</p>
            <ul>
              <li><Check /> Sesiones breves y constantes</li>
              <li><Check /> Horarios flexibles según tu ritmo</li>
              <li><Check /> Retroalimentación clase a clase</li>
            </ul>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Consultar el curso diario <ArrowRight size={17} /></a>
          </article>
          <article className="plan-card plan-featured">
            <span className="plan-label">Ideal para concentrar tu avance</span>
            <div className="plan-icon"><CalendarDays /></div>
            <h3>Sabatino</h3>
            <p className="plan-time"><strong>3 horas</strong> cada sábado</p>
            <ul>
              <li><Check /> Práctica intensiva en una sola sesión</li>
              <li><Check /> Actividades dinámicas y conversación</li>
              <li><Check /> Seguimiento personal en grupo pequeño</li>
            </ul>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Consultar el curso sabatino <ArrowRight size={17} /></a>
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
          <h2>Prepárate para dar el siguiente paso.</h2>
          <p>Fortalece las habilidades y estrategias que necesitas para presentar certificaciones de inglés.</p>
        </div>
        <div className="cert-list" aria-label="Certificaciones de inglés">
          <span><GraduationCap /> TOEFL</span>
          <span><BookOpenCheck /> IELTS</span>
          <span><GraduationCap /> Cambridge</span>
        </div>
      </section>

      <section className="notices-section" id="avisos">
        <div className="notices-copy">
          <span className="section-kicker">Avisos y novedades</span>
          <h2>Conoce nuestros próximos cursos.</h2>
          <p>Este espacio reúne convocatorias, fechas e información importante. Consulta los avisos vigentes y escríbenos para confirmar disponibilidad.</p>
          <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Pedir información por WhatsApp</a>
        </div>
        <div className="notices-grid">
          {notices.map((notice) => (
            <article className={`notice-card${'wide' in notice ? ' notice-card-wide' : ''}`} key={notice.src}>
              <div className="notice-card-label">
                <span>{notice.date}</span>
                <small>{notice.label}</small>
              </div>
              <Image
                src={notice.src}
                width={notice.width}
                height={notice.height}
                sizes="(max-width: 760px) 92vw, (max-width: 1200px) 44vw, 520px"
                alt={notice.alt}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="preguntas">
        <div className="faq-heading">
          <span className="section-kicker">Preguntas frecuentes</span>
          <h2>Lo esencial antes de comenzar.</h2>
          <p>Si necesitas confirmar algún detalle, también puedes escribirnos directamente por WhatsApp.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<span aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="placement-callout" aria-labelledby="placement-callout-title">
        <div>
          <span className="section-kicker section-kicker-light">Encuentra tu punto de partida</span>
          <h2 id="placement-callout-title">Puedes realizar un examen de ubicación.</h2>
          <p>Solicítalo por WhatsApp para conocer tu nivel y recibir orientación sobre el curso que mejor se adapte a ti.</p>
        </div>
        <a className="button button-whatsapp" href={placementUrl} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Solicitar examen por WhatsApp</a>
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

      <section className="location-section" id="ubicacion">
        <div className="location-info">
          <span className="section-kicker">Ubicación y horarios</span>
          <h2>Te esperamos en Lomas del Paradero (cerca de Forum Tlaquepaque).</h2>
          <div className="address-line"><MapPin /><strong>Av. Presidentes 1994, Lomas del Paradero</strong></div>
          <div className="hours-grid" aria-label="Horarios de atención">
            <div><span>Entre semana</span><strong>8:00 a. m. a 8:00 p. m.</strong></div>
            <div><span>Fin de semana</span><strong>8:00 a. m. a 3:00 p. m.</strong></div>
          </div>
          <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Av.+Presidentes+1994,+Lomas+del+Paradero" target="_blank" rel="noreferrer">Abrir ubicación en Google Maps <ExternalLink size={16} /></a>
        </div>
        <div className="map-frame">
          <iframe
            title="Mapa de Av. Presidentes 1994, Lomas del Paradero"
            src="https://www.google.com/maps?q=Av.+Presidentes+1994,+Lomas+del+Paradero&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
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
            <a href="#ubicacion"><MapPin /><span><small>Visítanos</small>Av. Presidentes 1994, Lomas del Paradero</span></a>
          </div>
          <a className="facebook-spotlight" href="https://www.facebook.com/p/RR-Ingl%C3%A9s-100050989914747/" target="_blank" rel="noreferrer">
            <span className="facebook-icon">f</span>
            <span><small>Noticias, fechas y nuevos cursos</small><strong>Sigue al Instituto R&R Inglés en Facebook</strong></span>
            <ExternalLink size={20} />
          </a>
        </div>
      </section>

      <footer>
        <Brand footer />
        <p>Aquí, cada alumno cuenta.</p>
        <a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
      </footer>
    </main>
  );
}
