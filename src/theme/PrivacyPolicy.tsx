import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LanguageSwitcher, { Languages } from "../Components/LanguageSwitcher";

/** ================= EN ================= **/
const EN_PRIVACY = (
  <>
    <Heading as="h1" mb={6}>
      Jokers of Neon - Privacy Policy
    </Heading>
    <Stack spacing={4}>
      <Text>
        <strong>Effective Date:</strong> Oct 16, 2025
      </Text>

      <Text>
        Caravana Studio (“we”, “us”, or “our”) respects your privacy. This
        Privacy Policy explains what data we collect, how we use it, the
        third-party services involved (including Google Analytics and Meta SDK),
        and your choices.
      </Text>

      <Heading as="h2" size="md">Scope</Heading>
      <Text>
        This Policy applies to Jokers of Neon on desktop web, iOS, and Android
        (the “Game”). It covers guest play and logged-in play via{" "}
        <strong>Cartridge Controller</strong>.
      </Text>

      <Heading as="h2" size="md">Data We Collect</Heading>
      <Text>
        – <strong>Username:</strong> Chosen by you to display in-game and on
        leaderboards. <br />
        – <strong>Usage & Analytics Data:</strong> We use{" "}
        <strong>Google Analytics</strong> and <strong>Meta SDK</strong> to
        collect anonymous or pseudonymous usage statistics (e.g., screen views,
        session duration, interaction events, device/OS type, language,
        approximate region). We do not collect your real name, email, or precise
        location through these tools. <br />
        – <strong>Device & Technical Data:</strong> Limited information your
        device or browser provides (e.g., IP address truncated/processed by
        analytics providers, app version, crash/error events, performance
        metrics). <br />
        – <strong>Cookies & Local Storage (Web):</strong> We and our service
        providers may use cookies, local storage, and similar technologies to
        remember preferences and measure usage. <br />
        – <strong>Login via Cartridge Controller (Optional):</strong> If you log
        in using Cartridge (Passkeys, Google, or Discord), Cartridge processes
        your authentication and related data under its own terms and privacy
        policy. We generally receive your in-game identifier/username to enable
        cross-platform play.
      </Text>

      <Heading as="h2" size="md">How We Use Data</Heading>
      <Text>
        We use the information above to: <br />
        – Display your username in the game and on leaderboards <br />
        – Operate, secure, and improve gameplay and user experience <br />
        – Understand usage patterns, performance, and stability <br />
        – Detect abuse/cheating and maintain service integrity <br />
        – Support cross-platform functionality (web, iOS, Android)
      </Text>

      <Heading as="h2" size="md">Third-Party Services</Heading>
      <Text>
        – <strong>Google Analytics:</strong> Usage metrics and performance
        insights. Google may use cookies/tech to analyze use. Learn how Google
        uses data{" "}
        <Link
          href="https://policies.google.com/technologies/partner-sites"
          isExternal
          color="blue.500"
        >
          here
        </Link>
        . <br />
        – <strong>Meta SDK:</strong> Aggregated analytics and
        performance/attribution on mobile. See Meta’s data practices{" "}
        <Link
          href="https://www.facebook.com/privacy/policy"
          isExternal
          color="blue.500"
        >
          here
        </Link>
        . <br />
        – <strong>Cartridge Controller:</strong> Handles login via Passkeys,
        Google, or Discord under its own policies (shown in the Cartridge
        product experience).
      </Text>

      <Heading as="h2" size="md">Data Sharing</Heading>
      <Text>
        We may share limited data with: <br />
        – <strong>Service providers</strong> (e.g., analytics vendors) under
        contract <br />
        – <strong>Legal/safety</strong> purposes (comply with law, enforce
        Terms, protect rights/security) <br />
        – <strong>Business transfers</strong> (merger, acquisition,
        reorganization) where permitted by law
      </Text>

      <Heading as="h2" size="md">International Transfers</Heading>
      <Text>
        We are a U.S. company (Delaware). Your data may be processed in the
        United States or other countries where our service providers operate,
        which may have different data protection laws than your country.
      </Text>

      <Heading as="h2" size="md">Data Retention</Heading>
      <Text>
        – Usernames are kept while your account is active or as needed to
        operate the Game. <br />
        – Analytics data is retained by Google and Meta according to their
        policies. <br />
        – We also retain data as required by law, to resolve disputes, and to
        enforce our Terms.
      </Text>

      <Heading as="h2" size="md">Your Choices & Rights</Heading>
      <Text>
        – <strong>Delete Account:</strong> Request deletion at{" "}
        <Link
          href="https://jokersofneon.com/delete-account"
          isExternal
          color="blue.500"
        >
          jokersofneon.com/delete-account
        </Link>
        . <br />
        – <strong>Analytics Controls:</strong> Manage cookies in your browser
        (web). On mobile, limit tracking in device settings (e.g., iOS App
        Tracking Transparency; Android Ads settings). You can also review
        personalized ads controls in your Meta/Facebook settings. <br />
        – <strong>Access/Correction:</strong> Request access to or correction of
        your information by contacting us.
      </Text>

      <Heading as="h2" size="md">Children</Heading>
      <Text>
        The Game is for players aged <strong>13+</strong>. We do not knowingly
        collect personal information from children under 13. If you believe a
        child provided personal data, contact us so we can delete it.
      </Text>

      <Heading as="h2" size="md">Security</Heading>
      <Text>
        We implement reasonable technical and organizational measures to help
        protect your data. However, no system is completely secure, and we
        cannot guarantee absolute security.
      </Text>

      <Heading as="h2" size="md">Changes to This Policy</Heading>
      <Text>
        We may update this Policy from time to time. The “Effective Date” above
        reflects the latest version. Material changes will be indicated by
        updating this page; continued use after an update means you accept the
        revised Policy.
      </Text>

      <Heading as="h2" size="md">Contact</Heading>
      <Text>
        For privacy questions or requests, contact:{" "}
        <Link href="mailto:gm@jokersofneon.com" color="blue.500">
          gm@jokersofneon.com
        </Link>
        .
      </Text>
    </Stack>
  </>
);

/** ================= ES ================= **/
const ES_PRIVACY = (
  <>
    <Heading as="h1" mb={6}>
      Jokers of Neon - Política de Privacidad
    </Heading>
    <Stack spacing={4}>
      <Text>
        <strong>Fecha de vigencia:</strong> 16 de oct. de 2025
      </Text>

      <Text>
        Caravana Studio (“nosotros”) respeta tu privacidad. Esta Política
        explica qué datos recopilamos, cómo los usamos, los servicios de
        terceros implicados (incluidos Google Analytics y Meta SDK) y tus
        opciones.
      </Text>

      <Heading as="h2" size="md">Ámbito</Heading>
      <Text>
        Aplica a Jokers of Neon en web de escritorio, iOS y Android (el “Juego”).
        Cubre juego como invitado y con sesión iniciada mediante{" "}
        <strong>Cartridge Controller</strong>.
      </Text>

      <Heading as="h2" size="md">Datos que Recopilamos</Heading>
      <Text>
        – <strong>Nombre de usuario:</strong> Elegido por ti para mostrarse en
        el juego y en las clasificaciones. <br />
        – <strong>Uso y analíticas:</strong> Usamos{" "}
        <strong>Google Analytics</strong> y <strong>Meta SDK</strong> para
        recopilar estadísticas anónimas o seudónimas (p. ej., pantallas vistas,
        duración de sesión, eventos de interacción, dispositivo/SO, idioma,
        región aproximada). No recopilamos tu nombre real, correo ni ubicación
        precisa mediante estas herramientas. <br />
        – <strong>Datos técnicos del dispositivo:</strong> Información limitada
        que tu dispositivo/navegador proporciona (p. ej., IP
        truncada/procesada por los proveedores de analíticas, versión de la
        app, errores, métricas de rendimiento). <br />
        – <strong>Cookies y almacenamiento local (Web):</strong> Podemos usar
        cookies, almacenamiento local y tecnologías similares para recordar
        preferencias y medir uso. <br />
        – <strong>Inicio de sesión con Cartridge (opcional):</strong> Si inicias
        sesión con Cartridge (Passkeys, Google o Discord), Cartridge procesa tu
        autenticación conforme a sus propios términos y política de privacidad.
        Normalmente recibimos tu identificador/nombre de usuario para habilitar
        el juego multiplataforma.
      </Text>

      <Heading as="h2" size="md">Cómo Usamos los Datos</Heading>
      <Text>
        – Mostrar tu nombre de usuario en el juego y en clasificaciones <br />
        – Operar, proteger y mejorar la experiencia de juego <br />
        – Comprender patrones de uso, rendimiento y estabilidad <br />
        – Detectar abuso/trampas y mantener la integridad del servicio <br />
        – Soportar funcionalidad multiplataforma (web, iOS, Android)
      </Text>

      <Heading as="h2" size="md">Servicios de Terceros</Heading>
      <Text>
        – <strong>Google Analytics:</strong> Métricas de uso y rendimiento.
        Puede usar cookies/tecnologías similares. Cómo usa Google los datos{" "}
        <Link
          href="https://policies.google.com/technologies/partner-sites"
          isExternal
          color="blue.500"
        >
          aquí
        </Link>
        . <br />
        – <strong>Meta SDK:</strong> Analíticas agregadas y
        rendimiento/atribución en móvil. Política de datos de Meta{" "}
        <Link
          href="https://www.facebook.com/privacy/policy"
          isExternal
          color="blue.500"
        >
          aquí
        </Link>
        . <br />
        – <strong>Cartridge Controller:</strong> Gestiona el inicio de sesión
        con Passkeys, Google o Discord bajo sus propias políticas.
      </Text>

      <Heading as="h2" size="md">Compartición de Datos</Heading>
      <Text>
        Podemos compartir datos limitados con: <br />
        – <strong>Proveedores</strong> (p. ej., analíticas) bajo contrato <br />
        – <strong>Fines legales o de seguridad</strong> (cumplir la ley, hacer
        cumplir los Términos, proteger derechos/seguridad) <br />
        – <strong>Transferencias empresariales</strong> (fusión, adquisición,
        reorganización) según la ley
      </Text>

      <Heading as="h2" size="md">Transferencias Internacionales</Heading>
      <Text>
        Somos una empresa estadounidense (Delaware). Tus datos pueden
        procesarse en EE. UU. u otros países donde operen nuestros proveedores,
        con leyes de protección de datos diferentes a las de tu país.
      </Text>

      <Heading as="h2" size="md">Conservación de Datos</Heading>
      <Text>
        – Conservamos el nombre de usuario mientras tu cuenta esté activa o sea
        necesario para operar el Juego. <br />
        – Google y Meta conservan las analíticas según sus políticas. <br />
        – También conservamos datos cuando la ley lo exige, para resolver
        disputas y hacer cumplir nuestros Términos.
      </Text>

      <Heading as="h2" size="md">Tus Opciones y Derechos</Heading>
      <Text>
        – <strong>Eliminar cuenta:</strong> Solicítalo en{" "}
        <Link
          href="https://jokersofneon.com/delete-account"
          isExternal
          color="blue.500"
        >
          jokersofneon.com/delete-account
        </Link>
        . <br />
        – <strong>Controles de analíticas:</strong> En web, gestiona cookies en
        tu navegador. En móvil, limita el rastreo en los ajustes del dispositivo
        (iOS: App Tracking Transparency; Android: opciones de anuncios). <br />
        – <strong>Acceso/Rectificación:</strong> Puedes solicitarnos acceso o
        corrección de tu información.
      </Text>

      <Heading as="h2" size="md">Menores</Heading>
      <Text>
        El Juego está dirigido a personas de <strong>13+</strong>. No
        recopilamos conscientemente información personal de menores de 13 años.
        Si crees que un menor nos envió datos, contáctanos para eliminarlos.
      </Text>

      <Heading as="h2" size="md">Seguridad</Heading>
      <Text>
        Implementamos medidas técnicas y organizativas razonables para proteger
        los datos. Ningún sistema es completamente seguro; no podemos garantizar
        seguridad absoluta.
      </Text>

      <Heading as="h2" size="md">Cambios en esta Política</Heading>
      <Text>
        Podemos actualizar esta Política. La “Fecha de vigencia” indica la
        última versión. El uso continuado tras una actualización implica la
        aceptación de la Política revisada.
      </Text>

      <Heading as="h2" size="md">Contacto</Heading>
      <Text>
        Para consultas o solicitudes de privacidad:{" "}
        <Link href="mailto:gm@jokersofneon.com" color="blue.500">
          gm@jokersofneon.com
        </Link>
        .
      </Text>
    </Stack>
  </>
);

/** ================= PT ================= **/
const PT_PRIVACY = (
  <>
    <Heading as="h1" mb={6}>
      Jokers of Neon - Política de Privacidade
    </Heading>
    <Stack spacing={4}>
      <Text>
        <strong>Data de vigência:</strong> 16 de out. de 2025
      </Text>

      <Text>
        A Caravana Studio (“nós”) respeita a sua privacidade. Esta Política
        explica quais dados coletamos, como os usamos, os serviços de terceiros
        envolvidos (incluindo Google Analytics e Meta SDK) e suas opções.
      </Text>

      <Heading as="h2" size="md">Escopo</Heading>
      <Text>
        Aplica-se ao Jokers of Neon na web (desktop), iOS e Android (o “Jogo”).
        Cobre jogo como convidado e com login via{" "}
        <strong>Cartridge Controller</strong>.
      </Text>

      <Heading as="h2" size="md">Dados que Coletamos</Heading>
      <Text>
        – <strong>Nome de usuário:</strong> Escolhido por você para aparecer no
        jogo e nas classificações. <br />
        – <strong>Uso e analítica:</strong> Usamos{" "}
        <strong>Google Analytics</strong> e <strong>Meta SDK</strong> para
        coletar estatísticas anônimas ou pseudônimas (ex.: telas vistas,
        duração de sessão, eventos de interação, dispositivo/SO, idioma, região
        aproximada). Não coletamos seu nome real, e-mail ou localização precisa
        por meio dessas ferramentas. <br />
        – <strong>Dados técnicos do dispositivo:</strong> Informações limitadas
        fornecidas pelo dispositivo/navegador (ex.: IP
        truncado/processado pelos provedores, versão do app, erros, métricas de
        desempenho). <br />
        – <strong>Cookies e armazenamento local (Web):</strong> Podemos usar
        cookies, armazenamento local e tecnologias semelhantes para lembrar
        preferências e medir uso. <br />
        – <strong>Login via Cartridge (opcional):</strong> Se fizer login com o
        Cartridge (Passkeys, Google ou Discord), o Cartridge processa sua
        autenticação conforme seus próprios termos e política de privacidade.
        Normalmente recebemos seu identificador/nome de usuário para habilitar o
        jogo multiplataforma.
      </Text>

      <Heading as="h2" size="md">Como Usamos os Dados</Heading>
      <Text>
        – Mostrar seu nome de usuário no jogo e nas classificações <br />
        – Operar, proteger e melhorar a experiência de jogo <br />
        – Compreender padrões de uso, desempenho e estabilidade <br />
        – Detectar abuso/trapaças e manter a integridade do serviço <br />
        – Dar suporte ao uso multiplataforma (web, iOS, Android)
      </Text>

      <Heading as="h2" size="md">Serviços de Terceiros</Heading>
      <Text>
        – <strong>Google Analytics:</strong> Métricas de uso e desempenho; pode
        usar cookies/tecnologias para análise. Como o Google usa dados{" "}
        <Link
          href="https://policies.google.com/technologies/partner-sites"
          isExternal
          color="blue.500"
        >
          aqui
        </Link>
        . <br />
        – <strong>Meta SDK:</strong> Analítica agregada e
        desempenho/atribuição em mobile. Política de dados da Meta{" "}
        <Link
          href="https://www.facebook.com/privacy/policy"
          isExternal
          color="blue.500"
        >
          aqui
        </Link>
        . <br />
        – <strong>Cartridge Controller:</strong> Gerencia login com Passkeys,
        Google ou Discord de acordo com suas próprias políticas.
      </Text>

      <Heading as="h2" size="md">Compartilhamento de Dados</Heading>
      <Text>
        Podemos compartilhar dados limitados com: <br />
        – <strong>Fornecedores</strong> (ex.: analítica) sob contrato <br />
        – <strong>Finalidades legais/segurança</strong> (cumprir a lei, fazer
        cumprir os Termos, proteger direitos/segurança) <br />
        – <strong>Transferências empresariais</strong> (fusão, aquisição,
        reorganização), quando permitido por lei
      </Text>

      <Heading as="h2" size="md">Transferências Internacionais</Heading>
      <Text>
        Somos uma empresa dos EUA (Delaware). Seus dados podem ser processados
        nos Estados Unidos ou em outros países onde nossos fornecedores atuem,
        com leis de proteção de dados diferentes das do seu país.
      </Text>

      <Heading as="h2" size="md">Retenção de Dados</Heading>
      <Text>
        – Mantemos o nome de usuário enquanto sua conta estiver ativa ou
        necessário para operar o Jogo. <br />
        – Google e Meta retêm dados analíticos conforme suas políticas. <br />
        – Também retemos dados conforme exigido por lei, para resolver disputas
        e aplicar nossos Termos.
      </Text>

      <Heading as="h2" size="md">Suas Opções e Direitos</Heading>
      <Text>
        – <strong>Excluir conta:</strong> Solicite em{" "}
        <Link
          href="https://jokersofneon.com/delete-account"
          isExternal
          color="blue.500"
        >
          jokersofneon.com/delete-account
        </Link>
        . <br />
        – <strong>Controles de analítica:</strong> No web, gerencie cookies no
        navegador. No mobile, limite o rastreamento nas configurações do
        dispositivo (iOS: App Tracking Transparency; Android: configurações de
        anúncios). <br />
        – <strong>Acesso/Correção:</strong> Solicite acesso ou correção de suas
        informações entrando em contato conosco.
      </Text>

      <Heading as="h2" size="md">Crianças</Heading>
      <Text>
        O Jogo é destinado a jogadores com <strong>13+</strong>. Não coletamos
        intencionalmente dados pessoais de menores de 13 anos. Se acreditar que
        uma criança nos forneceu dados, contate-nos para excluí-los.
      </Text>

      <Heading as="h2" size="md">Segurança</Heading>
      <Text>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger os
        dados. Nenhum sistema é totalmente seguro; não garantimos segurança
        absoluta.
      </Text>

      <Heading as="h2" size="md">Alterações a esta Política</Heading>
      <Text>
        Podemos atualizar esta Política periodicamente. A “Data de vigência”
        indica a versão mais recente. O uso contínuo após uma atualização
        significa que você aceita a Política revisada.
      </Text>

      <Heading as="h2" size="md">Contato</Heading>
      <Text>
        Dúvidas ou solicitações de privacidade:{" "}
        <Link href="mailto:gm@jokersofneon.com" color="blue.500">
          gm@jokersofneon.com
        </Link>
        .
      </Text>
    </Stack>
  </>
);

const getPrivacyByLanguage = (lang: Languages) => {
  switch (lang) {
    case Languages.ES:
      return ES_PRIVACY;
    case Languages.PT:
      return PT_PRIVACY;
    default:
      return EN_PRIVACY;
  }
};

export const PrivacyPolicy = () => {
  const [language, setLanguage] = useState<Languages>(Languages.EN);
  const isMiniappEmbed =
    window.self !== window.top &&
    new URLSearchParams(window.location.search).get("embed") === "miniapp";

  useEffect(() => {
    if (!isMiniappEmbed) return;

    document.documentElement.classList.add("miniapp-privacy-policy");

    return () => {
      document.documentElement.classList.remove("miniapp-privacy-policy");
    };
  }, [isMiniappEmbed]);

  return (
    <Box maxW="800px" mx="auto" px={4} py={8}>
      <LanguageSwitcher
        onLanguageChange={(l) => setLanguage(l)}
        placement={isMiniappEmbed ? "bottom-end" : undefined}
      />
      {getPrivacyByLanguage(language)}
    </Box>
  );
};
