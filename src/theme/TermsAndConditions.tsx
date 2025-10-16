import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import LanguageSwitcher, { Languages } from "../Components/LanguageSwitcher";

const ENGLISH_TERMS_AND_CONDITIONS = (
  <>
    <Heading as="h1" mb={6}>
      Jokers of Neon - Terms and Conditions <br /> v0.1 Pre-Launch Edition
    </Heading>
    <Stack spacing={4}>
      <Text>
        <strong>Last Updated:</strong> October 2025
        <br />
        <strong>Entity:</strong> Caravana Studio LLC (Delaware, USA)
        <br />
        <strong>Contact:</strong> gm@jokersofneon.com
      </Text>

      <Heading as="h2" size="md">
        TL;DR (Summary)
      </Heading>
      <Text>
        – The current version of <strong>Jokers of Neon</strong> is a free
        pre-launch build. <br />– You can play as a guest or via{" "}
        <strong>Cartridge Controller</strong> (Passkeys, Google, or Discord).{" "}
        <br />– You must be at least <strong>13 years old</strong>. <br />
        – No monetization yet; NFT rewards may be available later. <br />– We
        use Google Analytics and Meta SDK; see our{" "}
        <Link
          href="https://jokersofneon.com/privacy-policy"
          isExternal
          color="blue.500"
        >
          Privacy Policy
        </Link>
        . <br />
        – Cheating is not allowed and may lead to account suspension. <br />
        – The game is provided “as is”; Caravana Studio is not liable for losses
        or bugs. <br />– These Terms may change as the game evolves.
      </Text>

      <Heading as="h2" size="md">
        1. Acceptance of Terms
      </Heading>
      <Text>
        By accessing or playing <strong>Jokers of Neon</strong> (“the Game”),
        you agree to these Terms and our{" "}
        <Link
          href="https://jokersofneon.com/privacy-policy"
          isExternal
          color="blue.500"
        >
          Privacy Policy
        </Link>
        . If you do not agree, do not use the Game.
      </Text>

      <Heading as="h2" size="md">
        2. About the Game
      </Heading>
      <Text>
        Jokers of Neon is a strategy card game developed and operated by{" "}
        <strong>Caravana Studio LLC</strong>, a Delaware limited liability
        company. It is currently in a pre-launch testing phase with no
        monetization and can be played on desktop web, iOS, and Android.
      </Text>

      <Heading as="h2" size="md">
        3. Accounts and Access
      </Heading>
      <Text>
        You may play as a guest or log in using{" "}
        <strong>Cartridge Controller</strong>, which requires separate
        acceptance of Cartridge’s own terms and privacy policy. Cartridge
        supports Passkeys, Google, and Discord logins. You must be at least 13
        years old to play and are responsible for the security of your
        credentials.
      </Text>

      <Heading as="h2" size="md">
        4. Pre-Launch Nature
      </Heading>
      <Text>
        This version is experimental and may contain bugs or temporary outages.
        Progress or data may be reset prior to official launch.
      </Text>

      <Heading as="h2" size="md">
        5. Future Digital Assets and NFTs
      </Heading>
      <Text>
        Some rewards, like Season 1 packs, may later represent{" "}
        <strong>digital collectibles (NFTs)</strong> on the Starknet blockchain.
        Owning an NFT does not grant ownership of the intellectual property; it
        only gives a limited, non-exclusive license to display and use it
        in-game or for personal, non-commercial purposes.
      </Text>

      <Heading as="h2" size="md">
        6. User Conduct
      </Heading>
      <Text>
        Players may not cheat, exploit bugs, use bots, or disrupt servers.
        Violations may result in suspension or termination of accounts.
      </Text>

      <Heading as="h2" size="md">
        7. Intellectual Property
      </Heading>
      <Text>
        All content in the Game — including code, artwork, cards, names, logos,
        and designs — is owned by <strong>Caravana Studio LLC</strong>. No
        rights or licenses are granted except those expressly stated here.
      </Text>

      <Heading as="h2" size="md">
        8. Data and Privacy
      </Heading>
      <Text>
        We collect limited data, such as usernames and analytics, through{" "}
        <strong>Google Analytics</strong> and <strong>Meta SDK</strong>. Social
        logins are processed by Cartridge Controller. For full details see our{" "}
        <Link
          href="https://jokersofneon.com/privacy-policy"
          isExternal
          color="blue.500"
        >
          Privacy Policy
        </Link>
        . You may request account deletion at{" "}
        <Link
          href="https://jokersofneon.com/delete-account"
          isExternal
          color="blue.500"
        >
          jokersofneon.com/delete-account
        </Link>
        .
      </Text>

      <Heading as="h2" size="md">
        9. Termination
      </Heading>
      <Text>
        Caravana Studio may suspend or terminate accounts that violate these
        Terms, exploit the Game, or engage in unauthorized activity.
      </Text>

      <Heading as="h2" size="md">
        10. Third-Party Services
      </Heading>
      <Text>
        If you download the Game from the <strong>Apple App Store</strong> or{" "}
        <strong>Google Play Store</strong>, their respective terms also apply.
        Cartridge Controller, Google Analytics, and Meta SDK each have their own
        privacy policies.
      </Text>

      <Heading as="h2" size="md">
        11. Disclaimers and Limitation of Liability
      </Heading>
      <Text>
        The Game is provided <strong>“as is”</strong> and{" "}
        <strong>“as available.”</strong> Caravana Studio makes no warranties or
        representations about its performance or reliability. To the fullest
        extent permitted by law, Caravana Studio LLC, its affiliates, and team
        members are not liable for any indirect, incidental, or consequential
        damages arising from your use of the Game.
      </Text>

      <Heading as="h2" size="md">
        12. Indemnification
      </Heading>
      <Text>
        You agree to indemnify and hold harmless Caravana Studio LLC and its
        affiliates from any claims, damages, or liabilities resulting from your
        misuse of the Game or violation of these Terms.
      </Text>

      <Heading as="h2" size="md">
        13. Export and Sanctions Compliance
      </Heading>
      <Text>
        You may not use the Game if you are located in a jurisdiction subject to
        comprehensive U.S. sanctions or similar restrictions. This clause may
        expand as blockchain functionality is introduced.
      </Text>

      <Heading as="h2" size="md">
        14. Updates to These Terms
      </Heading>
      <Text>
        Caravana Studio may modify these Terms at any time. The “Last Updated”
        date above will indicate the most recent revision. Continued use after
        an update constitutes acceptance of the new version.
      </Text>

      <Heading as="h2" size="md">
        15. Governing Law
      </Heading>
      <Text>
        These Terms are governed by the laws of the{" "}
        <strong>State of Delaware, USA</strong>, without regard to conflict of
        law principles.
      </Text>

      <Heading as="h2" size="md">
        Language Versions
      </Heading>
      <Text>
        The authoritative version of these Terms is in <strong>English</strong>.
        Translations in Spanish and Portuguese are provided for convenience; in
        case of conflict, the English version prevails.
      </Text>

      <Text fontStyle="italic" mt={6}>
        © 2025 Caravana Studio LLC. All rights reserved.
      </Text>
    </Stack>
  </>
);

const SPANISH_TERMS_AND_CONDITIONS = (
  <>
    <Heading as="h1" mb={6}>
      Jokers of Neon - Términos y Condiciones <br /> v0.1 Edición Pre-Lanzamiento
    </Heading>
    <Stack spacing={4}>
      <Text>
        <strong>Última actualización:</strong> Octubre de 2025
        <br />
        <strong>Entidad:</strong> Caravana Studio LLC (Delaware, EE. UU.)
        <br />
        <strong>Contacto:</strong> gm@jokersofneon.com
      </Text>

      <Heading as="h2" size="md">
        TL;DR (Resumen)
      </Heading>
      <Text>
        – La versión actual de <strong>Jokers of Neon</strong> es gratuita y de pre-lanzamiento. <br />– Puedes jugar como invitado o mediante{" "}
        <strong>Cartridge Controller</strong> (Passkeys, Google o Discord). <br />– Debes tener al menos <strong>13 años</strong>. <br />
        – Aún no hay monetización; podrían habilitarse recompensas en NFT más adelante. <br />– Usamos Google Analytics y Meta SDK; consulta nuestra{" "}
        <Link href="https://jokersofneon.com/privacy-policy" isExternal color="blue.500">
          Política de Privacidad
        </Link>
        . <br />
        – No se permite hacer trampa; puede implicar suspensión de la cuenta. <br />
        – El juego se ofrece “tal cual”; Caravana Studio no es responsable por pérdidas o errores. <br />– Estos Términos pueden cambiar a medida que el juego evoluciona.
      </Text>

      <Heading as="h2" size="md">
        1. Aceptación de los Términos
      </Heading>
      <Text>
        Al acceder o jugar a <strong>Jokers of Neon</strong> (“el Juego”), aceptas estos Términos y nuestra{" "}
        <Link href="https://jokersofneon.com/privacy-policy" isExternal color="blue.500">
          Política de Privacidad
        </Link>
        . Si no estás de acuerdo, no utilices el Juego.
      </Text>

      <Heading as="h2" size="md">
        2. Sobre el Juego
      </Heading>
      <Text>
        Jokers of Neon es un juego de cartas de estrategia desarrollado y operado por{" "}
        <strong>Caravana Studio LLC</strong>, una sociedad de responsabilidad limitada de Delaware. Actualmente se encuentra en fase de pruebas de pre-lanzamiento, sin monetización, y puede jugarse en web de escritorio, iOS y Android.
      </Text>

      <Heading as="h2" size="md">
        3. Cuentas y Acceso
      </Heading>
      <Text>
        Puedes jugar como invitado o iniciar sesión mediante{" "}
        <strong>Cartridge Controller</strong>, lo que requiere aceptar por separado sus términos y políticas de privacidad. Cartridge admite inicio de sesión con Passkeys, Google y Discord. Debes tener al menos 13 años y eres responsable de la seguridad de tus credenciales.
      </Text>

      <Heading as="h2" size="md">
        4. Naturaleza de Pre-Lanzamiento
      </Heading>
      <Text>
        Esta versión es experimental y puede contener errores o interrupciones temporales. El progreso o los datos pueden reiniciarse antes del lanzamiento oficial.
      </Text>

      <Heading as="h2" size="md">
        5. Activos Digitales Futuros y NFTs
      </Heading>
      <Text>
        Algunas recompensas, como los sobres de la Temporada 1, pueden representar{" "}
        <strong>coleccionables digitales (NFTs)</strong> en la blockchain de Starknet. La propiedad de un NFT no otorga titularidad sobre la propiedad intelectual; solo concede una licencia limitada, no exclusiva y revocable para mostrarlo y usarlo en el juego o con fines personales y no comerciales.
      </Text>

      <Heading as="h2" size="md">
        6. Conducta del Usuario
      </Heading>
      <Text>
        No se permite hacer trampa, explotar errores, usar bots o perturbar los servidores. Las infracciones pueden resultar en suspensión o cierre de la cuenta.
      </Text>

      <Heading as="h2" size="md">
        7. Propiedad Intelectual
      </Heading>
      <Text>
        Todo el contenido del Juego —incluyendo código, arte, cartas, nombres, logotipos y diseños— pertenece a{" "}
        <strong>Caravana Studio LLC</strong>. No se conceden derechos ni licencias salvo lo expresamente indicado.
      </Text>

      <Heading as="h2" size="md">
        8. Datos y Privacidad
      </Heading>
      <Text>
        Recopilamos datos limitados, como nombres de usuario y analíticas, mediante{" "}
        <strong>Google Analytics</strong> y <strong>Meta SDK</strong>. Los inicios de sesión sociales son procesados por Cartridge Controller. Para más detalles, consulta nuestra{" "}
        <Link href="https://jokersofneon.com/privacy-policy" isExternal color="blue.500">
          Política de Privacidad
        </Link>
        . Puedes solicitar la eliminación de tu cuenta en{" "}
        <Link href="https://jokersofneon.com/delete-account" isExternal color="blue.500">
          jokersofneon.com/delete-account
        </Link>
        .
      </Text>

      <Heading as="h2" size="md">
        9. Terminación
      </Heading>
      <Text>
        Caravana Studio puede suspender o terminar cuentas que infrinjan estos Términos, exploten el Juego o realicen actividades no autorizadas.
      </Text>

      <Heading as="h2" size="md">
        10. Servicios de Terceros
      </Heading>
      <Text>
        Si descargas el Juego desde la <strong>Apple App Store</strong> o{" "}
        <strong>Google Play Store</strong>, también se aplican sus términos. Cartridge Controller, Google Analytics y Meta SDK tienen sus propias políticas de privacidad.
      </Text>

      <Heading as="h2" size="md">
        11. Descargos y Limitación de Responsabilidad
      </Heading>
      <Text>
        El Juego se proporciona <strong>“tal cual”</strong> y{" "}
        <strong>“según disponibilidad”.</strong> Caravana Studio no ofrece garantías sobre su rendimiento o fiabilidad. En la máxima medida permitida por la ley, Caravana Studio LLC, sus afiliadas y miembros del equipo no serán responsables por daños indirectos, incidentales o consecuentes derivados del uso del Juego.
      </Text>

      <Heading as="h2" size="md">
        12. Indemnización
      </Heading>
      <Text>
        Te comprometes a indemnizar y mantener indemne a Caravana Studio LLC y a sus afiliadas frente a reclamaciones, daños o responsabilidades que resulten de tu uso indebido del Juego o de la violación de estos Términos.
      </Text>

      <Heading as="h2" size="md">
        13. Cumplimiento de Exportaciones y Sanciones
      </Heading>
      <Text>
        No puedes utilizar el Juego si te encuentras en una jurisdicción sujeta a sanciones integrales de EE. UU. o restricciones similares. Esta cláusula puede ampliarse cuando se introduzca funcionalidad blockchain.
      </Text>

      <Heading as="h2" size="md">
        14. Actualizaciones de estos Términos
      </Heading>
      <Text>
        Caravana Studio puede modificar estos Términos en cualquier momento. La fecha de “Última actualización” indicará la revisión más reciente. El uso continuado tras una actualización implica la aceptación de la nueva versión.
      </Text>

      <Heading as="h2" size="md">
        15. Ley Aplicable
      </Heading>
      <Text>
        Estos Términos se rigen por las leyes del{" "}
        <strong>Estado de Delaware, EE. UU.</strong>, sin consideración a sus principios sobre conflictos de leyes.
      </Text>

      <Heading as="h2" size="md">
        Versiones de Idioma
      </Heading>
      <Text>
        La versión autorizada de estos Términos es la{" "}
        <strong>versión en inglés</strong>. Las traducciones al español y portugués se proporcionan por conveniencia; en caso de conflicto, prevalece la versión en inglés.
      </Text>

      <Text fontStyle="italic" mt={6}>
        © 2025 Caravana Studio LLC. Todos los derechos reservados.
      </Text>
    </Stack>
  </>
);

const PORTUGUESE_TERMS_AND_CONDITIONS = (
  <>
    <Heading as="h1" mb={6}>
      Jokers of Neon - Termos e Condições <br /> v0.1 Edição de Pré-Lançamento
    </Heading>
    <Stack spacing={4}>
      <Text>
        <strong>Última atualização:</strong> Outubro de 2025
        <br />
        <strong>Entidade:</strong> Caravana Studio LLC (Delaware, EUA)
        <br />
        <strong>Contato:</strong> gm@jokersofneon.com
      </Text>

      <Heading as="h2" size="md">
        TL;DR (Resumo)
      </Heading>
      <Text>
        – A versão atual de <strong>Jokers of Neon</strong> é gratuita e de pré-lançamento. <br />– Você pode jogar como convidado ou via{" "}
        <strong>Cartridge Controller</strong> (Passkeys, Google ou Discord). <br />– Você deve ter pelo menos <strong>13 anos</strong>. <br />
        – Ainda não há monetização; recompensas em NFT poderão estar disponíveis no futuro. <br />– Usamos Google Analytics e Meta SDK; consulte nossa{" "}
        <Link href="https://jokersofneon.com/privacy-policy" isExternal color="blue.500">
          Política de Privacidade
        </Link>
        . <br />
        – Trapaças não são permitidas e podem levar à suspensão da conta. <br />
        – O jogo é fornecido “no estado em que se encontra”; a Caravana Studio não se responsabiliza por perdas ou erros. <br />– Estes Termos podem mudar à medida que o jogo evolui.
      </Text>

      <Heading as="h2" size="md">
        1. Aceitação dos Termos
      </Heading>
      <Text>
        Ao acessar ou jogar <strong>Jokers of Neon</strong> (“o Jogo”), você concorda com estes Termos e com nossa{" "}
        <Link href="https://jokersofneon.com/privacy-policy" isExternal color="blue.500">
          Política de Privacidade
        </Link>
        . Se não concordar, não utilize o Jogo.
      </Text>

      <Heading as="h2" size="md">
        2. Sobre o Jogo
      </Heading>
      <Text>
        Jokers of Neon é um jogo de cartas de estratégia desenvolvido e operado pela{" "}
        <strong>Caravana Studio LLC</strong>, uma sociedade de responsabilidade limitada de Delaware. Encontra-se atualmente em fase de testes de pré-lançamento, sem monetização, e pode ser jogado na web (desktop), iOS e Android.
      </Text>

      <Heading as="h2" size="md">
        3. Contas e Acesso
      </Heading>
      <Text>
        Você pode jogar como convidado ou iniciar sessão usando o{" "}
        <strong>Cartridge Controller</strong>, o que exige aceitar separadamente os termos e a política de privacidade do Cartridge. O Cartridge oferece login com Passkeys, Google e Discord. Você deve ter pelo menos 13 anos e é responsável pela segurança de suas credenciais.
      </Text>

      <Heading as="h2" size="md">
        4. Natureza de Pré-Lançamento
      </Heading>
      <Text>
        Esta versão é experimental e pode conter erros ou indisponibilidades temporárias. O progresso ou os dados poderão ser reiniciados antes do lançamento oficial.
      </Text>

      <Heading as="h2" size="md">
        5. Ativos Digitais Futuros e NFTs
      </Heading>
      <Text>
        Algumas recompensas, como os pacotes da Temporada 1, poderão representar{" "}
        <strong>colecionáveis digitais (NFTs)</strong> na blockchain Starknet. A propriedade de um NFT não concede titularidade sobre a propriedade intelectual; concede apenas uma licença limitada, não exclusiva e revogável para exibi-lo e usá-lo no jogo e para fins pessoais e não comerciais.
      </Text>

      <Heading as="h2" size="md">
        6. Conduta do Usuário
      </Heading>
      <Text>
        É proibido trapacear, explorar falhas, usar bots ou interromper os servidores. Violações podem resultar na suspensão ou encerramento de contas.
      </Text>

      <Heading as="h2" size="md">
        7. Propriedade Intelectual
      </Heading>
      <Text>
        Todo o conteúdo do Jogo — incluindo código, artes, cartas, nomes, logotipos e designs — pertence à{" "}
        <strong>Caravana Studio LLC</strong>. Nenhum direito ou licença é concedido, exceto conforme expressamente previsto nestes Termos.
      </Text>

      <Heading as="h2" size="md">
        8. Dados e Privacidade
      </Heading>
      <Text>
        Coletamos dados limitados, como nome de usuário e métricas de uso, por meio do{" "}
        <strong>Google Analytics</strong> e do <strong>Meta SDK</strong>. Logins sociais são processados pelo Cartridge Controller. Para detalhes completos, consulte nossa{" "}
        <Link href="https://jokersofneon.com/privacy-policy" isExternal color="blue.500">
          Política de Privacidade
        </Link>
        . Você pode solicitar a exclusão da conta em{" "}
        <Link href="https://jokersofneon.com/delete-account" isExternal color="blue.500">
          jokersofneon.com/delete-account
        </Link>
        .
      </Text>

      <Heading as="h2" size="md">
        9. Encerramento
      </Heading>
      <Text>
        A Caravana Studio pode suspender ou encerrar contas que violem estes Termos, explorem o Jogo ou realizem atividades não autorizadas.
      </Text>

      <Heading as="h2" size="md">
        10. Serviços de Terceiros
      </Heading>
      <Text>
        Se você baixar o Jogo na <strong>Apple App Store</strong> ou na{" "}
        <strong>Google Play Store</strong>, também se aplicam os respectivos termos. Cartridge Controller, Google Analytics e Meta SDK possuem suas próprias políticas de privacidade.
      </Text>

      <Heading as="h2" size="md">
        11. Isenções e Limitação de Responsabilidade
      </Heading>
      <Text>
        O Jogo é fornecido <strong>“no estado em que se encontra”</strong> e{" "}
        <strong>“conforme disponível”.</strong> A Caravana Studio não oferece garantias quanto ao desempenho ou à confiabilidade. Na máxima medida permitida por lei, a Caravana Studio LLC, suas afiliadas e membros da equipe não serão responsáveis por danos indiretos, incidentais ou consequentes decorrentes do uso do Jogo.
      </Text>

      <Heading as="h2" size="md">
        12. Indenização
      </Heading>
      <Text>
        Você concorda em indenizar e isentar a Caravana Studio LLC e suas afiliadas de quaisquer reivindicações, danos ou responsabilidades resultantes do uso indevido do Jogo ou da violação destes Termos.
      </Text>

      <Heading as="h2" size="md">
        13. Conformidade com Exportações e Sanções
      </Heading>
      <Text>
        Você não poderá usar o Jogo se estiver em uma jurisdição sujeita a sanções abrangentes dos EUA ou restrições semelhantes. Esta cláusula poderá ser ampliada conforme a funcionalidade de blockchain for introduzida.
      </Text>

      <Heading as="h2" size="md">
        14. Atualizações destes Termos
      </Heading>
      <Text>
        A Caravana Studio poderá modificar estes Termos a qualquer momento. A data de “Última atualização” indicará a revisão mais recente. O uso contínuo após uma atualização constitui aceitação da nova versão.
      </Text>

      <Heading as="h2" size="md">
        15. Lei Aplicável
      </Heading>
      <Text>
        Estes Termos são regidos pelas leis do{" "}
        <strong>Estado de Delaware, EUA</strong>, sem consideração aos princípios de conflito de leis.
      </Text>

      <Heading as="h2" size="md">
        Versões de Idioma
      </Heading>
      <Text>
        A versão autorizada destes Termos é a{" "}
        <strong>versão em inglês</strong>. As traduções em espanhol e português são fornecidas para conveniência; em caso de conflito, prevalece a versão em inglês.
      </Text>

      <Text fontStyle="italic" mt={6}>
        © 2025 Caravana Studio LLC. Todos os direitos reservados.
      </Text>
    </Stack>
  </>
);

const getTermsAndConditions = (language: Languages) => {
  switch (language) {
    case Languages.ES:
      return SPANISH_TERMS_AND_CONDITIONS;
    case Languages.PT:
      return PORTUGUESE_TERMS_AND_CONDITIONS;
    default:
      return ENGLISH_TERMS_AND_CONDITIONS;
  }
};

export const TermsAndConditions = () => {
  const [language, setLanguage] = useState<Languages>(Languages.EN);

  return (
    <Box maxW="800px" mx="auto" px={4} py={8}>
      <LanguageSwitcher
        onLanguageChange={(newLanguage) => setLanguage(newLanguage)}
      />
      {getTermsAndConditions(language)}
    </Box>
  );
};
