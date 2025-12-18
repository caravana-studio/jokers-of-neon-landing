import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import LanguageSwitcher, { Languages } from "../Components/LanguageSwitcher";

const ENGLISH_TERMS_AND_CONDITIONS = (
  <>
    <Heading as="h1" mb={6}>
      Jokers of Neon – Terms and Conditions
      <br />
      Early Access Season 1
    </Heading>

    <Stack spacing={4}>
      <Text>
        <strong>Effective Date:</strong> December 19, 2025
        <br />
        <strong>Entity:</strong> Caravana Studio LLC (Delaware, USA)
        <br />
        <strong>Contact:</strong> gm@jokersofneon.com
      </Text>

      <Heading as="h2" size="md">
        TL;DR (Summary)
      </Heading>
      <Text>
        – Jokers of Neon is a skill-based strategy card game in Early Access.
        <br />
        – You must be at least <strong>13 years old</strong> to play.
        <br />
        – Season Passes and card packs are sold for <strong>USD via Stripe</strong>.
        <br />
        – All sales are final, except where required by law or in case of technical failure.
        <br />
        – Cards earned or purchased during the Season may be <strong>NFTs on Starknet</strong>.
        <br />
        – We do not operate a marketplace; any external trading is at your own risk.
        <br />
        – NFTs are collectibles, not investments.
        <br />
        – We may rebalance cards, reset progress, or suspend accounts if needed.
        <br />
        – The Game is provided “as is”, without warranties.
      </Text>

      <Heading as="h2" size="md">
        1. Acceptance of Terms
      </Heading>
      <Text>
        By accessing or playing <strong>Jokers of Neon</strong> (“the Game”), you
        agree to these Terms and our{" "}
        <Link href="https://jokersofneon.com/privacy-policy" isExternal color="blue.500">
          Privacy Policy
        </Link>
        . If you do not agree, do not use the Game.
      </Text>

      <Heading as="h2" size="md">
        2. About the Game
      </Heading>
      <Text>
        Jokers of Neon is a digital strategy card game developed and operated by{" "}
        <strong>Caravana Studio LLC</strong>. The Game is offered as an{" "}
        <strong>Early Access – Season 1</strong> release and may evolve over time.
      </Text>

      <Heading as="h2" size="md">
        3. Accounts and Access
      </Heading>
      <Text>
        You may play as a guest or authenticate via{" "}
        <strong>Cartridge Controller</strong>, which supports passkeys and
        third-party logins. You are responsible for maintaining the security of
        your account and credentials. You must be at least 13 years old to use
        the Game.
      </Text>

      <Heading as="h2" size="md">
        4. Early Access Nature
      </Heading>
      <Text>
        The Game is provided in Early Access and may contain bugs, balance
        issues, downtime, or temporary maintenance periods. Progress, rankings,
        or content may be adjusted or reset as part of development.
      </Text>

      <Heading as="h2" size="md">
        5. Purchases, Payments, and Refunds
      </Heading>
      <Text>
        Season Passes and card packs are sold in <strong>USD</strong> via{" "}
        <strong>Stripe</strong>. We accept the payment methods supported by
        Stripe. All purchases are <strong>one-time purchases</strong>.
        <br />
        <br />
        <strong>All sales are final</strong>, except where required by applicable
        law or in the case of a verified technical failure. Prices may exclude
        applicable taxes, which may be calculated and collected by Stripe at
        checkout.
        <br />
        <br />
        Chargebacks, payment reversals, or fraudulent activity may result in
        suspension of access, account freezing, and restrictions applied to
        associated digital assets.
      </Text>

      <Heading as="h2" size="md">
        6. Digital Assets and NFTs
      </Heading>
      <Text>
        As you progress through the Season or make purchases, you may obtain
        digital collectibles represented as{" "}
        <strong>non-fungible tokens (NFTs)</strong> minted on the{" "}
        <strong>Starknet mainnet</strong>.
        <br />
        <br />
        NFTs are minted automatically on-chain once the associated action or
        purchase is completed. Ownership of an NFT does <strong>not</strong>{" "}
        grant ownership of the Game’s intellectual property.
      </Text>

      <Heading as="h2" size="md">
        7. License and Use of NFTs
      </Heading>
      <Text>
        NFT ownership grants a limited, non-exclusive, non-transferable license
        to use and display the associated card within the Game and for personal,
        non-commercial display purposes.
        <br />
        <br />
        NFTs have <strong>no guaranteed utility</strong>, <strong>no monetary
        value</strong>, and are <strong>not intended as an investment</strong>.
        No expectation of profit is implied.
      </Text>

      <Heading as="h2" size="md">
        8. No Marketplace
      </Heading>
      <Text>
        Caravana Studio does not operate or provide a marketplace for trading
        NFTs. Any external transfer or trading of NFTs occurs independently and
        at your own risk. We are not responsible for third-party platforms,
        losses, scams, or disputes.
      </Text>

      <Heading as="h2" size="md">
        9. Game Balance and Changes
      </Heading>
      <Text>
        All cards remain playable across seasons. However, we reserve the right
        to modify, rebalance, or adjust card effects, mechanics, or gameplay at
        any time to maintain fairness and game integrity.
      </Text>

      <Heading as="h2" size="md">
        10. User Conduct
      </Heading>
      <Text>
        You may not cheat, exploit bugs, automate gameplay, manipulate economic
        systems, or disrupt the Game. Violations may result in account
        suspension, progress resets, bans, or restrictions applied to NFTs,
        including marking them as non-marketable.
      </Text>

      <Heading as="h2" size="md">
        11. Intellectual Property
      </Heading>
      <Text>
        All Game content, including software, visuals, audio, names, logos, and
        designs, is owned by <strong>Caravana Studio LLC</strong>. No rights are
        granted except as expressly stated.
      </Text>

      <Heading as="h2" size="md">
        12. Third-Party Services
      </Heading>
      <Text>
        The Game may be accessed via web browsers or app distribution platforms.
        Apple Inc. and Google LLC are not responsible for the Game, its content,
        or its digital assets. Stripe, Cartridge, and analytics providers operate
        under their own terms and policies.
      </Text>

      <Heading as="h2" size="md">
        13. Termination and Enforcement
      </Heading>
      <Text>
        We may suspend or terminate accounts, freeze access, reset progress, or
        restrict digital assets in cases of fraud, abuse, chargebacks, or Terms
        violations.
      </Text>

      <Heading as="h2" size="md">
        14. Disclaimers and Limitation of Liability
      </Heading>
      <Text>
        The Game is provided <strong>“as is”</strong> and{" "}
        <strong>“as available.”</strong> To the maximum extent permitted by law,
        Caravana Studio LLC shall not be liable for indirect, incidental, or
        consequential damages.
      </Text>

      <Heading as="h2" size="md">
        15. Governing Law
      </Heading>
      <Text>
        These Terms are governed by the laws of the{" "}
        <strong>State of Delaware, USA</strong>.
      </Text>

      <Heading as="h2" size="md">
        Language Versions
      </Heading>
      <Text>
        The authoritative version of these Terms is in English. Translations are
        provided for convenience only.
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
      Jokers of Neon – Términos y Condiciones
      <br />
      Early Access – Temporada 1
    </Heading>

    <Stack spacing={4}>
      <Text>
        <strong>Fecha de vigencia:</strong> 19 de diciembre de 2025
        <br />
        <strong>Entidad:</strong> Caravana Studio LLC (Delaware, EE. UU.)
        <br />
        <strong>Contacto:</strong> gm@jokersofneon.com
      </Text>

      <Heading as="h2" size="md">
        TL;DR (Resumen)
      </Heading>
      <Text>
        – Jokers of Neon es un juego de cartas estratégico basado en habilidad,
        en Early Access.
        <br />
        – Debes tener al menos <strong>13 años</strong> para jugar.
        <br />
        – Los Season Passes y packs de cartas se venden en <strong>USD vía Stripe</strong>.
        <br />
        – Todas las ventas son finales, salvo que la ley aplicable disponga lo contrario
        o exista un fallo técnico.
        <br />
        – Las cartas obtenidas durante la Temporada pueden ser <strong>NFTs en Starknet</strong>.
        <br />
        – No operamos un marketplace; cualquier intercambio externo es bajo tu propio riesgo.
        <br />
        – Los NFTs son coleccionables, no inversiones.
        <br />
        – Podemos reequilibrar cartas, reiniciar progreso o suspender cuentas si es necesario.
        <br />
        – El juego se proporciona “tal cual”, sin garantías.
      </Text>

      <Heading as="h2" size="md">
        1. Aceptación de los Términos
      </Heading>
      <Text>
        Al acceder o jugar <strong>Jokers of Neon</strong> (“el Juego”), aceptas
        estos Términos y nuestra{" "}
        <Link href="https://jokersofneon.com/privacy-policy" isExternal color="blue.500">
          Política de Privacidad
        </Link>
        . Si no estás de acuerdo, no utilices el Juego.
      </Text>

      <Heading as="h2" size="md">
        2. Sobre el Juego
      </Heading>
      <Text>
        Jokers of Neon es un juego digital de cartas estratégicas desarrollado y
        operado por <strong>Caravana Studio LLC</strong>. El Juego se ofrece como
        <strong> Early Access – Temporada 1</strong> y puede evolucionar con el tiempo.
      </Text>

      <Heading as="h2" size="md">
        3. Cuentas y Acceso
      </Heading>
      <Text>
        Puedes jugar como invitado o autenticarte mediante{" "}
        <strong>Cartridge Controller</strong>, que admite passkeys y logins de terceros.
        Eres responsable de la seguridad de tu cuenta y credenciales. Debes tener
        al menos 13 años para utilizar el Juego.
      </Text>

      <Heading as="h2" size="md">
        4. Naturaleza de Early Access
      </Heading>
      <Text>
        El Juego se ofrece en Early Access y puede contener errores, problemas de
        balance, interrupciones o períodos de mantenimiento. El progreso,
        clasificaciones o contenido pueden ajustarse o reiniciarse durante el desarrollo.
      </Text>

      <Heading as="h2" size="md">
        5. Compras, Pagos y Reembolsos
      </Heading>
      <Text>
        Los Season Passes y packs de cartas se venden en <strong>USD</strong> a través
        de <strong>Stripe</strong>. Aceptamos los métodos de pago soportados por Stripe.
        Todas las compras son <strong>compras únicas</strong>.
        <br />
        <br />
        <strong>Todas las ventas son finales</strong>, salvo que la ley aplicable
        disponga lo contrario o en caso de un fallo técnico verificado. Los precios
        pueden no incluir impuestos aplicables, los cuales podrán ser calculados y
        cobrados por Stripe al finalizar la compra.
        <br />
        <br />
        Los contracargos, reversiones de pago o actividades fraudulentas pueden
        resultar en la suspensión de acceso, congelación de la cuenta y restricciones
        sobre los activos digitales asociados.
      </Text>

      <Heading as="h2" size="md">
        6. Activos Digitales y NFTs
      </Heading>
      <Text>
        A medida que progresas en la Temporada o realizas compras, puedes obtener
        coleccionables digitales representados como{" "}
        <strong>tokens no fungibles (NFTs)</strong> acuñados en la{" "}
        <strong>mainnet de Starknet</strong>.
        <br />
        <br />
        Los NFTs se acuñan automáticamente on-chain una vez completada la acción
        o compra correspondiente. La propiedad de un NFT no otorga derechos de
        propiedad intelectual sobre el Juego.
      </Text>

      <Heading as="h2" size="md">
        7. Licencia y Uso de NFTs
      </Heading>
      <Text>
        La propiedad de un NFT otorga una licencia limitada, no exclusiva y no
        transferible para usar y mostrar la carta asociada dentro del Juego y
        para uso personal no comercial.
        <br />
        <br />
        Los NFTs <strong>no tienen valor monetario garantizado</strong>,{" "}
        <strong>no están destinados como inversión</strong> y no implican
        expectativa de beneficio.
      </Text>

      <Heading as="h2" size="md">
        8. Sin Marketplace
      </Heading>
      <Text>
        Caravana Studio no opera ni proporciona un marketplace para el intercambio
        de NFTs. Cualquier transferencia o intercambio externo ocurre de forma
        independiente y bajo tu propio riesgo. No somos responsables por
        plataformas de terceros, pérdidas, estafas o disputas.
      </Text>

      <Heading as="h2" size="md">
        9. Balance y Cambios del Juego
      </Heading>
      <Text>
        Todas las cartas siguen siendo jugables entre temporadas. Sin embargo,
        nos reservamos el derecho de modificar o reequilibrar efectos, mecánicas
        o gameplay en cualquier momento para mantener la integridad del Juego.
      </Text>

      <Heading as="h2" size="md">
        10. Conducta del Usuario
      </Heading>
      <Text>
        No está permitido hacer trampas, explotar errores, automatizar el
        gameplay ni manipular sistemas económicos. Las infracciones pueden
        resultar en suspensión de cuenta, reinicio de progreso, baneos o
        restricciones sobre NFTs, incluyendo marcarlos como no comercializables.
      </Text>

      <Heading as="h2" size="md">
        11. Propiedad Intelectual
      </Heading>
      <Text>
        Todo el contenido del Juego es propiedad de{" "}
        <strong>Caravana Studio LLC</strong>. No se otorgan derechos salvo los
        expresamente indicados.
      </Text>

      <Heading as="h2" size="md">
        12. Servicios de Terceros
      </Heading>
      <Text>
        El Juego puede accederse mediante navegadores web o plataformas de
        distribución de apps. Apple Inc. y Google LLC no son responsables del
        Juego, su contenido ni sus activos digitales. Stripe, Cartridge y los
        proveedores de analítica operan bajo sus propios términos.
      </Text>

      <Heading as="h2" size="md">
        13. Terminación y Medidas
      </Heading>
      <Text>
        Podemos suspender o terminar cuentas, congelar accesos, reiniciar
        progreso o restringir activos digitales en casos de fraude, abuso,
        contracargos o violaciones de estos Términos.
      </Text>

      <Heading as="h2" size="md">
        14. Exenciones y Limitación de Responsabilidad
      </Heading>
      <Text>
        El Juego se proporciona <strong>“tal cual”</strong> y{" "}
        <strong>“según disponibilidad”</strong>. En la máxima medida permitida
        por la ley, Caravana Studio LLC no será responsable por daños indirectos
        o consecuenciales.
      </Text>

      <Heading as="h2" size="md">
        15. Ley Aplicable
      </Heading>
      <Text>
        Estos Términos se rigen por las leyes del{" "}
        <strong>Estado de Delaware, EE. UU.</strong>.
      </Text>

      <Heading as="h2" size="md">
        Idioma
      </Heading>
      <Text>
        La versión autoritativa de estos Términos es la versión en inglés.
        Las traducciones se proporcionan solo por conveniencia.
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
      Jokers of Neon – Termos e Condições
      <br />
      Early Access – Temporada 1
    </Heading>

    <Stack spacing={4}>
      <Text>
        <strong>Data de vigência:</strong> 19 de dezembro de 2025
        <br />
        <strong>Entidade:</strong> Caravana Studio LLC (Delaware, EUA)
        <br />
        <strong>Contato:</strong> gm@jokersofneon.com
      </Text>

      <Heading as="h2" size="md">
        TL;DR (Resumo)
      </Heading>
      <Text>
        – Jokers of Neon é um jogo de cartas estratégico baseado em habilidade,
        em Early Access.
        <br />
        – É necessário ter pelo menos <strong>13 anos</strong> para jogar.
        <br />
        – Season Passes e pacotes de cartas são vendidos em <strong>USD via Stripe</strong>.
        <br />
        – Todas as vendas são finais, salvo exigência legal ou falha técnica.
        <br />
        – As cartas obtidas durante a Temporada podem ser <strong>NFTs na Starknet</strong>.
        <br />
        – Não operamos um marketplace; qualquer troca externa ocorre por sua conta e risco.
        <br />
        – NFTs são colecionáveis, não investimentos.
        <br />
        – Podemos rebalancear cartas, redefinir progresso ou suspender contas.
        <br />
        – O jogo é fornecido “como está”, sem garantias.
      </Text>

      <Heading as="h2" size="md">
        1. Aceitação dos Termos
      </Heading>
      <Text>
        Ao acessar ou jogar <strong>Jokers of Neon</strong> (“o Jogo”), você
        concorda com estes Termos e com nossa{" "}
        <Link href="https://jokersofneon.com/privacy-policy" isExternal color="blue.500">
          Política de Privacidade
        </Link>
        . Caso não concorde, não utilize o Jogo.
      </Text>

      <Heading as="h2" size="md">
        2. Sobre o Jogo
      </Heading>
      <Text>
        Jokers of Neon é um jogo digital de cartas estratégicas desenvolvido e
        operado pela <strong>Caravana Studio LLC</strong>. O Jogo é oferecido como
        <strong> Early Access – Temporada 1</strong> e pode evoluir ao longo do tempo.
      </Text>

      <Heading as="h2" size="md">
        3. Contas e Acesso
      </Heading>
      <Text>
        Você pode jogar como convidado ou autenticar-se por meio do{" "}
        <strong>Cartridge Controller</strong>, que suporta passkeys e logins de
        terceiros. Você é responsável pela segurança da sua conta e credenciais.
        É necessário ter pelo menos 13 anos para usar o Jogo.
      </Text>

      <Heading as="h2" size="md">
        4. Natureza do Early Access
      </Heading>
      <Text>
        O Jogo é oferecido em Early Access e pode conter erros, problemas de
        balanceamento, interrupções ou períodos de manutenção. Progresso,
        rankings ou conteúdo podem ser ajustados ou redefinidos.
      </Text>

      <Heading as="h2" size="md">
        5. Compras, Pagamentos e Reembolsos
      </Heading>
      <Text>
        Season Passes e pacotes de cartas são vendidos em <strong>USD</strong> via{" "}
        <strong>Stripe</strong>. Aceitamos os métodos de pagamento suportados
        pelo Stripe. Todas as compras são <strong>compras únicas</strong>.
        <br />
        <br />
        <strong>Todas as vendas são finais</strong>, salvo quando exigido por lei
        ou em caso de falha técnica verificada. Os preços podem não incluir
        impostos aplicáveis, que poderão ser calculados e cobrados pelo Stripe
        no checkout.
        <br />
        <br />
        Estornos, chargebacks ou atividades fraudulentas podem resultar em
        suspensão de acesso, congelamento da conta e restrições aos ativos digitais.
      </Text>

      <Heading as="h2" size="md">
        6. Ativos Digitais e NFTs
      </Heading>
      <Text>
        Ao progredir na Temporada ou realizar compras, você pode obter
        colecionáveis digitais representados como{" "}
        <strong>tokens não fungíveis (NFTs)</strong> cunhados na{" "}
        <strong>mainnet da Starknet</strong>.
        <br />
        <br />
        Os NFTs são cunhados automaticamente on-chain após a conclusão da ação
        ou compra correspondente. A posse de um NFT não concede direitos de
        propriedade intelectual sobre o Jogo.
      </Text>

      <Heading as="h2" size="md">
        7. Licença e Uso de NFTs
      </Heading>
      <Text>
        A posse de um NFT concede uma licença limitada, não exclusiva e não
        transferível para usar e exibir a carta associada dentro do Jogo e para
        exibição pessoal não comercial.
        <br />
        <br />
        Os NFTs <strong>não possuem valor monetário garantido</strong>,{" "}
        <strong>não são destinados como investimento</strong> e não implicam
        expectativa de lucro.
      </Text>

      <Heading as="h2" size="md">
        8. Ausência de Marketplace
      </Heading>
      <Text>
        A Caravana Studio não opera nem fornece um marketplace para negociação
        de NFTs. Qualquer transferência ou troca externa ocorre de forma
        independente e por sua conta e risco. Não nos responsabilizamos por
        plataformas de terceiros, perdas, golpes ou disputas.
      </Text>

      <Heading as="h2" size="md">
        9. Balanceamento e Alterações do Jogo
      </Heading>
      <Text>
        Todas as cartas permanecem jogáveis entre temporadas. No entanto,
        reservamo-nos o direito de modificar ou rebalancear efeitos, mecânicas
        ou gameplay a qualquer momento para manter a integridade do Jogo.
      </Text>

      <Heading as="h2" size="md">
        10. Conduta do Usuário
      </Heading>
      <Text>
        Não é permitido trapacear, explorar bugs, automatizar gameplay ou
        manipular sistemas econômicos. Violações podem resultar em suspensão de
        conta, redefinição de progresso, banimento ou restrições sobre NFTs,
        incluindo marcá-los como não comercializáveis.
      </Text>

      <Heading as="h2" size="md">
        11. Propriedade Intelectual
      </Heading>
      <Text>
        Todo o conteúdo do Jogo é de propriedade da{" "}
        <strong>Caravana Studio LLC</strong>. Nenhum direito é concedido além
        dos expressamente indicados.
      </Text>

      <Heading as="h2" size="md">
        12. Serviços de Terceiros
      </Heading>
      <Text>
        O Jogo pode ser acessado via navegadores web ou plataformas de apps.
        Apple Inc. e Google LLC não são responsáveis pelo Jogo, seu conteúdo ou
        ativos digitais. Stripe, Cartridge e provedores de analytics operam sob
        seus próprios termos.
      </Text>

      <Heading as="h2" size="md">
        13. Rescisão e Medidas
      </Heading>
      <Text>
        Podemos suspender ou encerrar contas, congelar acessos, redefinir
        progresso ou restringir ativos digitais em casos de fraude, abuso,
        chargebacks ou violação destes Termos.
      </Text>

      <Heading as="h2" size="md">
        14. Isenções e Limitação de Responsabilidade
      </Heading>
      <Text>
        O Jogo é fornecido <strong>“como está”</strong> e{" "}
        <strong>“conforme disponibilidade”</strong>. Na máxima extensão permitida
        por lei, a Caravana Studio LLC não será responsável por danos indiretos
        ou consequenciais.
      </Text>

      <Heading as="h2" size="md">
        15. Lei Aplicável
      </Heading>
      <Text>
        Estes Termos são regidos pelas leis do{" "}
        <strong>Estado de Delaware, EUA</strong>.
      </Text>

      <Heading as="h2" size="md">
        Idioma
      </Heading>
      <Text>
        A versão autoritativa destes Termos é a versão em inglês. As traduções
        são fornecidas apenas por conveniência.
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
