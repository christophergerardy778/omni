<template>
  <v-dialog
    v-model="dialog"
    scrollable
    width="800px"
    max-height="200px"
    :fullscreen="$vuetify.breakpoint.smAndDown ? true : false"
  >
    <template v-slot:activator="{ on, attrs }">
      <h4
        v-if="!check"
        v-bind="attrs"
        v-on="on"
        class="font-weight-light text-end"
        style="color: #ffeb00;"
      >
        Notice of Privacy
      </h4>
      <div v-else :style="`color: ${color}`">
        <input v-model="acepto" type="checkbox"> I have read and agree the <a v-bind="attrs" v-on="on">privacy policy.</a>
      </div>
    </template>
    <v-card>
      <v-card-title>
        <img
          src="~/assets/img/logo.png"
          width="150"
        />
        <v-spacer></v-spacer>
        <v-icon @click="dialog = false">mdi-close-circle</v-icon>
      </v-card-title>
      <v-card-text>
        <v-row justify="center">
          <v-col
            cols="12"
            class="subTituloMobile mt-3 text-center"
          >
            Notice of Privacy
          </v-col>
          <v-col
            cols="11"
            class="pb-12"
            style="text-align: justify;"
          >
            OMNI INTERNATIONAL LOGISTICS (persona a quien para los efectos de este aviso de privacidad se le nombra (¨El Responsable ̈) con el objetivo de respetar los derechos e intereses de cada individuo en relación con su intimidad y sus datos personales. En cumplimiento a los principios y directrices prescritos por la Ley Federal de Protección en Mexico de datos Personales en Posesión de Particulares (en lo sucesivo a la ley), se pone a disposición de todos y cada una de las personas físicas, en cualquiera de sus caracteres, ya sea como clientes, empleados, trabajadores, candidatos, proveedores, contratistas o transportistas, (en adelante ¨titular¨ en lo individual y ¨titulares¨ en lo colectivo), de las cuales sea necesario el tratamiento de datos personales.
            El presente Aviso de Privacidad, motivo por el cual se manifiesta lo siguiente:
            <br/>
            Identidad y domicilio del responsable del Tratamiento de Datos Personales: (El ̈responsable ̈) quien señala como domicilio en 14203 Distribution Ave, Laredo, TX 78045, Estados Unidos, por medio del presente Aviso, hace de su conocimiento que los datos personales, los cuales son debidamente citados en apartado siguiente. y que nos proporciona el ̈titular ̈ activo o potencial, serán tratados estrictamente para los fines que más adelante se señalan, siendo el único responsable del tratamiento de dichos datos, el área de Mercadotecnia, ubicada en el domicilio referido, con numero de telefono (867)3343939 y correo electrónico privacy@omniintllc.us
            Datos Personales y finalidades del tratamiento de los mismos: Los datos personales de los ¨titulares¨, que serán tratados por el ¨responsable¨ consisten en información personal, la cual puede comprender: su nombre, dirección de correo electrónico, domicilio fisico, domicilio fiscal, numero de telefono, asi como datos financieros y patrimoniales, direccion de pagina web, entre otros. Estrictamente indispensables para los fines que más adelante se señalan. El ̈responsable ̈ recabará sus datos personales y serán tratados únicamente para los siguientes fines, conforme le sean aplicables, a cada titular, según su relación jurídica con el mismo:
            A) Evaluación como proveedor, contratista, transportista, cliente, empleado, o trabajador potencial.
            B) Para efectos de la elaboración y celebración de (los) contrato(s) que, acorde a la relación jurídica correspondiente, en su caso se requieran.
            C) El cumplimiento de obligaciones que deriven de la relación jurídica, correspondiente.
            D) Adquirir, recibir y proveer los servicios y/o productos requeridos; e) Evaluar la calidad de los productos y servicios.
            F) Diligencias de cobranza extrajudicial en el caso de clientes morosos o cualquier otro deudor.
            G) Realizar avisos ante autoridades judiciales, administrativas o del trabajo para el cumplimiento de obligaciones derivadas de la relación particular que se tenga con cada ¨titular¨. Los datos personales serán guardados y resguardados bajo la más estricta confidencialidad y no se les podrá dar un uso distinto a los antes mencionados, salvo que medie un cambio en este Aviso de Privacidad. Una vez que se cumpla la finalidad del tratamiento de datos personales, éstos serán bloqueados con el único propósito de determinar posibles responsabilidades en relación con su tratamiento, hasta el plazo de prescripción legal o contractual de estas. Durante dicho periodo, los datos personales no podrán ser objeto de tratamiento y transcurrido éste, se procederá a su cancelación en la base de datos que corresponda.
            Recoleccion de los Datos Personales: el ̈responsable ̈ sigue todos los principios que marca la ¨Ley¨ como la licitud,calidad, consentimiento, información, finalidad, lealtad, proporcionalidad y responsabilidad. Los datos personales serán recabados directamente del titular de forma personal con medios y formatos impresos o a través de otros medios ópticos, sonoros, visuales, o por cualquier otra tecnología lícita como nuestra página de internet o servicios en línea, entre otras. La información que recibimos de nuestra página de internet al dejar y proporcionar sus datos, es registrada en nuestras bases de datos.
            En este sitio web se utilizan ¨cookies¨. (Una cookie es un pequeño archivo de texto que un sitio web o un correo electrónico pueden salvar en su navegador y almacenarlo en su disco duro. Además, podremos obtener información del titular de otras fuentes permitidas por la Ley, tales como directorios telefónicos, referencias de empresas o particulares, bases de datos públicas de cualquier entidad o dependencia pública o privada, entre otras.
            <br/>
            Opciones y medios para lograr el uso o divulgación de los datos: ¨El Responsable¨ cuenta con las medidas de seguridad administrativas, técnicas y físicas necesarias y suficientes para proteger sus datos personales contra daño, pérdida, alteración, destrucción, uso, acceso y/o tratamiento no autorizado. Los datos personales son salvaguardados en bases de datos y equipos de cómputo que cuentan con la seguridad necesaria para prevenir fugas de información, controles de acceso fisico y logico, contraseñas, passwords, sistemas de protección anti intrusos (IPS, Firewall), herramientas de protección antivirus y filtrado web, las cuales, son entre otras, algunas de las herramientas utilizadas para mantener la seguridad de los datos en los sistemas de información del ¨responsable¨.
            Las herramientas de seguridad informática mencionadas en el párrafo anterior están apoyadas por una política interna de seguridad de la información que explica a los empleados las consideraciones de seguridad que deben tomar en cuenta al utilizar un sistema informático y es reforzada constantemente. Por ello, se hace de su conocimiento que usted podrá solicitar la limitación del uso o divulgación de sus datos personales, materia de este Aviso de Privacidad, a través de escrito enviado al área de Mercadotecnia del ¨responsable¨ al domicilio indicado en el apartado número I de este Aviso.
            Medios para ejercer los derechos de acceso, rectificación, cancelación y oposición, de conformidad con lo dispuesto en la Ley: Los ¨titulares¨ por su propio derecho a través de su apoderado o representante legal, debidamente acreditado e identificado, podrá ejercer sus derechos de acceso, rectificación, cancelación y/u oposición, a través de solicitud por escrito, dirigido al área de Mercadotecnia, que contenga lo siguiente:
            Nombre del ¨titular¨, acompañando los documentos que acrediten su identidad. En caso de ser apoderados legales o representantes, adjuntar el o los documentos que así lo acrediten, incluyendo carta poder simple, firmada ante dos testigos.
            Domicilio o correo electrónico para recibir notificaciones.
            La descripción clara y precisa del dato personal y el derecho que pretenda ejercer sobre aquél.
            Los elementos que faciliten la localización del dato cuyo derecho se pretenda ejercer, tal como la fecha en la cual se obtuvo el dato. Para tales efectos, una vez recibida su solicitud, el ¨responsable¨ mediante el área correspondiente dará contestación sobre la procedencia o improcedencia de la solicitud, en un plazo no mayor a veinte días, comunicando por escrito en el domicilio señalado por el ¨titular¨, o bien en el correo electrónico señalando para tal efecto. Este procedimiento no genera ningún tipo de cargo o compensación por ningún concepto para el ¨titular¨. En consecuencia de lo anterior el ¨responsable¨ no está obligado a cancelar los datos personales cuando se trate de alguno de los supuestos establecidos en ¨Ley¨.
            VI. Transferencias de datos que se efectúen: Los datos personales no serán divulgados ni compartidos con terceros nacionales o extranjeros, salvo cuando se trate de referencias laborales, o transferencias de datos con fines de recomendación y evaluación de adquisición, recepción y provisión de servicios, a la luz de lo anterior no se considera como tercero a las empresas filiales del ¨responsable¨ y que formen parte de OMNI INTERNATIONAL LOGISTICS, mismas que requieran tener los datos personales para los fines antes mencionados.
            <br/>
            VII. Revocación, los ̈Titulares ̈ podrán revocar su consentimiento para el tratamiento de datos personales en cualquier momento, debiendo únicamente para tales efectos enviar una solicitud por escrito al área de Mercadotecnia en el domicilio del ¨responsable¨, quien en un plazo máximo de ocho días hábiles informará al ¨titular¨. Para tal efecto el ¨responsable¨ podrá comunicar al ¨titular¨ sobre la procedencia de su solicitud por cualquier vía, la resolución que recaiga sobre su solicitud de revocación.
            <br/>
            VIII. Modificaciones al Aviso de Privacidad, nos reservamos el derecho de cambiar este aviso de privacidad en cualquier momento. Estas modificaciones estarán disponibles en cualquiera de los siguientes medios:
            Anuncios visibles en nuestras oficinas
            En nuestra página de internet y/o
            Via correo electronico registrado y que nos haya sido proporcionado
            No seremos responsables si usted no recibe notificaciones de cambio en el aviso de privacidad. Si existiese algún problema con su cuenta de correo electrónico o de datos por internet.
            El presente aviso podrá consultarlo las veces que así lo requiera en la página electrónica: www.
            <br/>
            Actualización: Enero 2022
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    check: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'black',
    }
  },
  data() {
    return {
      dialog: false,
      acepto: false,
      info1: [
        '<a href="https://www.freepik.es/vectores/camara">Vector de Cámara creado por vectorjuice - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/hombre">Foto de Hombre creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/trabajo">Foto de Trabajo creado por freepik - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/negocios">Foto de Negocios creado por senivpetro - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/edificio">Foto de Edificio creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/personas">Foto de Personas creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/vino">Foto de Vino creado por freepik - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/fondo">Foto de Fondo creado por bedneyimages - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/hombre">Foto de Hombre creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/negocios">Foto de Negocios creado por senivpetro - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/trabajo">Foto de Trabajo creado por freepik - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/tecnologia">Foto de Tecnología creado por freepik - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/edificio">Foto de Edificio creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/comida">Foto de Comida creado por freepik - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/hombre">Foto de Hombre creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/coche">Foto de Coche creado por aleksandarlittlewolf - www.freepik.es</a>',
        '<a href="https://www.freepik.es/fotos/personas">Foto de Personas creado por aleksandarlittlewolf - www.freepik.es</a>',
      ],
      info2: [
        'Photo by <a href="https://unsplash.com/@meric?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Meriç Dağlı</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        'Photo by <a href="https://unsplash.com/@thekidflame?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ernesto Leon</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
        'Photo by <a href="https://unsplash.com/@elevatebeer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Elevate</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      ],
    }
  },
  methods: {
    emitir(value){
      this.$emit('input', value);
    }
  },
  watch: {
    acepto(value){
      this.emitir(value);
    }
  }
}
</script>
