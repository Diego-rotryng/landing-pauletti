import { site } from "../lib/site";

export default function Page() {
  return (
    <main style={{padding:40,maxWidth:900,margin:"0 auto"}}>
      <h1 style={{fontSize:42}}>{site.name}</h1>
      <h2>{site.tagline}</h2>

      <p style={{marginTop:20}}>
        Coaching & Consultoría para lograr cambios personales, laborales y profesionales
        desde el desarrollo consciente.
      </p>

      <div style={{marginTop:30}}>
        <a href={site.whatsapp} style={{padding:12,background:"#2563eb",color:"white",borderRadius:8,textDecoration:"none"}}>
          Entrevista inicial gratis por WhatsApp
        </a>
      </div>

      <h3 style={{marginTop:50}}>Servicios</h3>
      <ul>
        <li>Coaching Ontológico, Laboral, Vocacional y Ejecutivo</li>
        <li>Capacitaciones empresariales</li>
        <li>Consultoría en procesos y operaciones</li>
        <li>Auditorías internas de calidad</li>
        <li>Entrenamientos para equipos</li>
      </ul>

      <h3 style={{marginTop:40}}>Contacto</h3>
      <p>Email: {site.email}</p>
      <p>WhatsApp: {site.whatsappLabel}</p>
    </main>
  );
}
