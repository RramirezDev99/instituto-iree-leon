import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { site } from "@/data/site";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Instituto IREE León",
  description:
    "Aviso de Privacidad Integral del Instituto IREE León conforme a la LFPDPPP."
};

const sections: { title: string; content: React.ReactNode }[] = [
  {
    title: "1. Identidad y domicilio del responsable",
    content: (
      <p>
        El responsable del tratamiento de tus datos personales es el{" "}
        <strong>{site.legalName}</strong> (en adelante, &ldquo;el IREE&rdquo; o
        &ldquo;el Responsable&rdquo;), con domicilio en{" "}
        {site.contact.address.street}, {site.contact.address.neighborhood},{" "}
        {site.contact.address.city}, {site.contact.address.country}. Puedes
        contactarnos al correo{" "}
        <a
          href={`mailto:${site.contact.email}`}
          className="text-brand-600 underline"
        >
          {site.contact.email}
        </a>{" "}
        o al teléfono {site.contact.phone}.
      </p>
    )
  },
  {
    title: "2. Datos personales que recabamos",
    content: (
      <>
        <p>
          Para cumplir con las finalidades descritas en este aviso, el IREE
          podrá recabar las siguientes categorías de datos personales:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            <strong>Datos de identificación:</strong> nombre, edad, fecha y
            lugar de nacimiento, fotografía, identificación oficial.
          </li>
          <li>
            <strong>Datos de contacto:</strong> domicilio, correo electrónico,
            número telefónico, contacto de emergencia.
          </li>
          <li>
            <strong>Datos académicos:</strong> historial educativo y
            antecedentes escolares.
          </li>
          <li>
            <strong>Datos familiares:</strong> nombres y datos de contacto de
            padres, madres, tutores o cuidadores.
          </li>
          <li>
            <strong>Datos patrimoniales o financieros</strong> (cuando se
            realicen donativos o pagos): institución bancaria, último monto
            aportado, datos para emitir comprobantes fiscales.
          </li>
        </ul>
      </>
    )
  },
  {
    title: "3. Datos personales sensibles",
    content: (
      <p>
        Para brindar atención adecuada a las personas que reciben nuestros
        servicios, el IREE recaba <strong>datos personales sensibles</strong>{" "}
        como estado de salud, diagnóstico médico, tratamientos, terapias,
        condiciones de discapacidad y, en su caso, información psicológica o
        socioeconómica. Estos datos se tratan bajo medidas reforzadas de
        seguridad y únicamente con tu consentimiento expreso.
      </p>
    )
  },
  {
    title: "4. Finalidades del tratamiento",
    content: (
      <>
        <p>
          <strong>Finalidades primarias</strong> (necesarias para la relación
          con el IREE):
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Brindar servicios de educación especial y rehabilitación.</li>
          <li>
            Elaborar expedientes académicos, médicos y de seguimiento de cada
            usuaria o usuario.
          </li>
          <li>
            Gestionar inscripciones, reinscripciones y trámites administrativos.
          </li>
          <li>
            Atender solicitudes de información, dudas o comentarios enviadas
            por la persona titular.
          </li>
          <li>
            Procesar donativos, emitir recibos deducibles y dar cumplimiento a
            obligaciones fiscales.
          </li>
        </ul>
        <p className="mt-4">
          <strong>Finalidades secundarias</strong> (no necesarias, requieren
          consentimiento):
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Difusión institucional en redes sociales, sitio web y materiales
            promocionales (uso de imagen y nombre).
          </li>
          <li>
            Envío de boletines, invitaciones a eventos, campañas de procuración
            de fondos y agradecimientos.
          </li>
          <li>Encuestas de satisfacción y estudios estadísticos.</li>
        </ul>
        <p className="mt-4">
          Si no deseas que tratemos tus datos para las finalidades secundarias,
          puedes manifestarlo enviando un correo a{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="text-brand-600 underline"
          >
            {site.contact.email}
          </a>{" "}
          con el asunto &ldquo;Limitación de uso&rdquo;.
        </p>
      </>
    )
  },
  {
    title: "5. Transferencia de datos",
    content: (
      <p>
        El IREE no transferirá tus datos personales a terceros sin tu
        consentimiento, salvo en los supuestos previstos por la Ley Federal de
        Protección de Datos Personales en Posesión de los Particulares
        (LFPDPPP). En caso de ser requerido por autoridades competentes o
        para cumplir obligaciones legales, fiscales o sanitarias, los datos
        podrán compartirse con dichas autoridades.
      </p>
    )
  },
  {
    title: "6. Medios para ejercer los derechos ARCO",
    content: (
      <>
        <p>
          Como titular de tus datos personales tienes derecho a conocer qué
          datos tenemos de ti, para qué los usamos y las condiciones del uso
          que les damos (<strong>Acceso</strong>). Asimismo, es tu derecho
          solicitar la corrección de tu información personal en caso de que
          esté desactualizada, sea inexacta o incompleta (
          <strong>Rectificación</strong>); que la eliminemos de nuestros
          registros o bases de datos cuando consideres que la misma no está
          siendo utilizada conforme a los principios, deberes y obligaciones
          previstas en la ley (<strong>Cancelación</strong>); así como
          oponerte al uso de tus datos personales para fines específicos (
          <strong>Oposición</strong>).
        </p>
        <p className="mt-3">
          Para ejercer cualquiera de estos derechos, envía una solicitud al
          correo{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="text-brand-600 underline"
          >
            {site.contact.email}
          </a>{" "}
          con los siguientes datos: (i) nombre completo y medio para recibir
          respuesta; (ii) documento que acredite tu identidad o, en su caso,
          la representación legal; (iii) descripción clara y precisa del
          derecho que deseas ejercer; (iv) cualquier elemento que facilite la
          localización de los datos. Daremos respuesta en un plazo máximo de{" "}
          <strong>20 días hábiles</strong>.
        </p>
      </>
    )
  },
  {
    title: "7. Revocación del consentimiento",
    content: (
      <p>
        En cualquier momento puedes revocar el consentimiento que nos has
        otorgado para el tratamiento de tus datos personales. Para ello,
        envía tu solicitud al correo{" "}
        <a
          href={`mailto:${site.contact.email}`}
          className="text-brand-600 underline"
        >
          {site.contact.email}
        </a>
        . Considera que, por motivos legales o por la propia naturaleza de la
        relación, el ejercicio de este derecho podría no ser procedente o
        implicar la conclusión de los servicios que prestamos.
      </p>
    )
  },
  {
    title: "8. Uso de cookies y tecnologías similares",
    content: (
      <p>
        El sitio web del IREE puede utilizar cookies estrictamente necesarias
        para su funcionamiento, así como herramientas básicas de análisis
        para entender cómo se navega el sitio y mejorarlo. No utilizamos
        cookies con fines publicitarios. Puedes configurar tu navegador para
        bloquear o eliminar cookies en cualquier momento.
      </p>
    )
  },
  {
    title: "9. Cambios al aviso de privacidad",
    content: (
      <p>
        El IREE podrá realizar modificaciones o actualizaciones al presente
        aviso de privacidad en cualquier momento, derivadas de nuevos
        requerimientos legales, de necesidades propias de nuestros servicios,
        o por cambios en nuestras prácticas internas. Cualquier modificación
        se publicará en este mismo sitio:{" "}
        <a
          href="https://institutoireeleon.com.mx/aviso-de-privacidad"
          className="text-brand-600 underline"
        >
          institutoireeleon.com.mx/aviso-de-privacidad
        </a>
        .
      </p>
    )
  }
];

export default function AvisoPrivacidad() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header sencillo */}
      <header className="border-b border-ink-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="group">
            <Logo variant="color" size={42} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-ink-700 hover:text-brand-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500 text-white text-sm font-bold mb-5">
          <ShieldCheck className="w-4 h-4" />
          DOCUMENTO LEGAL
        </div>
        <h1 className="font-display text-4xl sm:text-5xl text-ink-900 uppercase leading-tight tracking-tight">
          Aviso de Privacidad Integral
        </h1>
        <p className="mt-4 text-ink-700 font-medium">
          Última actualización: {site.legal.lastPrivacyUpdate}
        </p>

        <div className="mt-10 space-y-10 text-ink-800 leading-relaxed">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl sm:text-2xl text-ink-900 mb-3 uppercase">
                {s.title}
              </h2>
              <div className="space-y-3 font-medium">{s.content}</div>
            </section>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 rounded-2xl bg-brand-50 border-2 border-brand-200 text-sm text-ink-800 leading-relaxed font-medium">
          <p>
            Este aviso constituye un modelo base preparado para el IREE y debe
            ser <strong>revisado y, en su caso, ajustado por el área legal
            del Instituto</strong> antes de su publicación definitiva conforme
            a las particularidades operativas, contractuales y fiscales de la
            asociación.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-4 bg-brand-500 hover:bg-brand-600 text-white font-display rounded-full shadow-lg shadow-brand-500/30 transition-all uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            Regresar al sitio
          </Link>
        </div>
      </article>
    </main>
  );
}
