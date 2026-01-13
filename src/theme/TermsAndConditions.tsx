import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import LanguageSwitcher, { Languages } from "../Components/LanguageSwitcher";

const ENGLISH_TERMS_AND_CONDITIONS = (
  <>
    <Heading as="h1" mb={6}>
      Jokers of Neon – Terms and Conditions
      <br />
      Season 1
    </Heading>

    <Stack spacing={4}>
      <Text>
        <strong>Effective Date:</strong> January 12, 2026
        <br />
        <strong>Entity:</strong> Caravana Studio LLC (Delaware, USA)
        <br />
        <strong>Contact:</strong> gm@jokersofneon.com
      </Text>

      {/* TL;DR */}
      <Heading as="h2" size="md">
        TL;DR (Summary)
      </Heading>
      <Text>
        – Jokers of Neon is a skill-based strategy card game in <strong>Season 1</strong>.
        <br />
        – You must be at least <strong>13 years old</strong> to play.
        <br />
        – Season Passes and card packs are sold in <strong>USD via Stripe on desktop</strong>, and via <strong>Apple Pay on iOS</strong> or <strong>Google Pay on Android</strong> (currency may vary).
        <br />
        – All sales are final, except where required by law or due to verified technical failure.
        <br />
        – Cards earned or purchased may be <strong>NFTs on Starknet</strong>.
        <br />
        – We do not operate a marketplace and are not responsible for external trading.
        <br />
        – NFTs are collectibles, not investments, and have no guaranteed value.
        <br />
        – We may rebalance gameplay, reset progress, suspend accounts, or restrict assets.
        <br />
        – The Game is provided “as is” and “as available”.
      </Text>

      {/* 1 */}
      <Heading as="h2" size="md">
        1. Acceptance of Terms
      </Heading>
      <Text>
        By accessing or using <strong>Jokers of Neon</strong> (“the Game”), you
        agree to be bound by these Terms and our{" "}
        <Link href="https://jokersofneon.com/privacy-policy" isExternal color="blue.500">
          Privacy Policy
        </Link>
        . If you do not agree, you must not access or use the Game.
      </Text>

      {/* 2 */}
      <Heading as="h2" size="md">
        2. About the Game
      </Heading>
      <Text>
        Jokers of Neon is a digital strategy card game developed and operated by{" "}
        <strong>Caravana Studio LLC</strong> (“Caravana Studio”, “we”, “us”).
        The Game is offered as <strong>Season 1</strong> and is
        under active development.
      </Text>

      {/* 3 */}
      <Heading as="h2" size="md">
        3. Eligibility and Accounts
      </Heading>
      <Text>
        You must be at least <strong>13 years old</strong> to play. You may access
        the Game as a guest or authenticate via{" "}
        <strong>Cartridge Controller</strong>, which is subject to its own terms
        and privacy policies.
        <br />
        <br />
        You are responsible for maintaining the confidentiality and security of
        your account credentials and for all activity associated with your account.
      </Text>

      {/* 4 */}
      <Heading as="h2" size="md">
        4. Live Service and Season Updates
      </Heading>
      <Text>
        The Game is a live service and may contain bugs, errors, incomplete
        features, balance issues, or temporary outages. Game content,
        progression, rankings, rewards, or mechanics may change, reset, or be
        removed at any time, including during Season 1 or between seasons.
      </Text>

      {/* 5 */}
      <Heading as="h2" size="md">
        5. Purchases, Payments, and Refunds
      </Heading>
      <Text>
        Season Passes and card packs are sold in <strong>USD via Stripe on desktop</strong>.
        On iOS, purchases are made using <strong>Apple Pay</strong>; on Android,
        purchases are made using <strong>Google Pay</strong>. Currency may vary
        by region and platform. We accept the payment methods supported by Stripe
        for desktop purchases. All purchases are <strong>one-time purchases</strong>.
        <br />
        <br />
        By using Apple Pay or Google Pay, you agree to the applicable Apple and
        Google terms and policies and are responsible for complying with them.
        <br />
        <br />
        <strong>All sales are final</strong>, except where required by applicable
        law or in the event of a verified technical failure. Prices may exclude
        applicable taxes, which may be calculated and collected by Stripe, Apple,
        or Google at checkout.
        <br />
        <br />
        Chargebacks, payment reversals, or fraudulent activity may result in
        suspension or termination of access, account freezing, and restrictions
        applied to associated digital assets.
      </Text>

      {/* 6 */}
      <Heading as="h2" size="md">
        6. Digital Assets and NFTs
      </Heading>
      <Text>
        As you progress through the Season or make purchases, you may receive
        digital collectibles represented as{" "}
        <strong>non-fungible tokens (NFTs)</strong> minted automatically on the{" "}
        <strong>Starknet mainnet</strong>.
        <br />
        <br />
        NFTs are minted on-chain once the corresponding action or purchase is
        completed. Ownership of an NFT does not confer ownership of any
        intellectual property associated with the Game.
      </Text>

      {/* 7 */}
      <Heading as="h2" size="md">
        7. NFT License and No Investment Disclaimer
      </Heading>
      <Text>
        Ownership of an NFT grants a limited, non-exclusive, revocable,
        non-transferable license to use and display the associated card within
        the Game and for personal, non-commercial display purposes.
        <br />
        <br />
        NFTs are <strong>collectibles</strong>, have <strong>no guaranteed
        utility or value</strong>, and are <strong>not intended as investments</strong>.
        No expectation of profit, appreciation, or financial return is implied.
      </Text>

      {/* 8 */}
      <Heading as="h2" size="md">
        8. No Marketplace
      </Heading>
      <Text>
        Caravana Studio does not operate, facilitate, or endorse any marketplace
        for NFTs. Any external transfer or trading occurs independently and at
        your own risk. We are not responsible for third-party platforms, losses,
        scams, or disputes.
      </Text>

      {/* 9 */}
      <Heading as="h2" size="md">
        9. Game Balance and Modifications
      </Heading>
      <Text>
        All cards remain playable across seasons. We reserve the right to modify,
        rebalance, or adjust gameplay mechanics, card effects, rewards, or rules
        at any time, even if such changes affect the perceived value or utility
        of digital assets.
      </Text>

      {/* 10 */}
      <Heading as="h2" size="md">
        10. User Conduct
      </Heading>
      <Text>
        You may not cheat, exploit bugs, automate gameplay, manipulate economic
        systems, or disrupt servers. Violations may result in account suspension,
        termination, progress resets, bans, or restrictions on digital assets,
        including marking NFTs as non-marketable.
      </Text>

      {/* 11 */}
      <Heading as="h2" size="md">
        11. Intellectual Property
      </Heading>
      <Text>
        All content in the Game, including software, artwork, cards, designs,
        names, and logos, is owned by <strong>Caravana Studio LLC</strong>. No
        rights or licenses are granted except as expressly stated.
      </Text>

      {/* 12 */}
      <Heading as="h2" size="md">
        12. Third-Party Services
      </Heading>
      <Text>
        The Game may integrate or rely on third-party services, including
        Cartridge Controller, Stripe, Apple Pay, Google Pay, analytics providers,
        and blockchain infrastructure. Apple Inc. and Google LLC are not
        responsible for the Game, its content, or its digital assets.
      </Text>

      {/* 13 */}
      <Heading as="h2" size="md">
        13. Export and Sanctions Compliance
      </Heading>
      <Text>
        You may not access or use the Game if you are located in a jurisdiction
        subject to U.S. sanctions or where use of the Game would violate
        applicable laws or regulations.
      </Text>

      {/* 14 */}
      <Heading as="h2" size="md">
        14. Termination and Enforcement
      </Heading>
      <Text>
        We may suspend or terminate accounts, freeze access, reset progress, or
        restrict digital assets in cases of fraud, abuse, chargebacks, or
        violations of these Terms.
      </Text>

      {/* 15 */}
      <Heading as="h2" size="md">
        15. Disclaimers
      </Heading>
      <Text>
        THE GAME IS PROVIDED <strong>“AS IS”</strong> AND{" "}
        <strong>“AS AVAILABLE”</strong>, WITHOUT WARRANTIES OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
      </Text>

      {/* 16 */}
      <Heading as="h2" size="md">
        16. Limitation of Liability
      </Heading>
      <Text>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, CARAVANA STUDIO LLC, ITS
        AFFILIATES, AND TEAM MEMBERS SHALL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, CONSEQUENTIAL, OR SPECIAL DAMAGES ARISING FROM YOUR
        USE OF THE GAME.
      </Text>

      {/* 17 */}
      <Heading as="h2" size="md">
        17. Indemnification
      </Heading>
      <Text>
        You agree to indemnify and hold harmless Caravana Studio LLC, its
        affiliates, and team members from any claims, damages, liabilities, or
        expenses arising from your use of the Game or violation of these Terms.
      </Text>

      {/* 18 */}
      <Heading as="h2" size="md">
        18. Updates to These Terms
      </Heading>
      <Text>
        We may modify these Terms at any time. The Effective Date above reflects
        the latest version. Continued use of the Game after changes constitutes
        acceptance of the updated Terms.
      </Text>

      {/* 19 */}
      <Heading as="h2" size="md">
        19. Governing Law
      </Heading>
      <Text>
        These Terms are governed by the laws of the{" "}
        <strong>State of Delaware, USA</strong>, without regard to conflict of law principles.
      </Text>

      {/* Language */}
      <Heading as="h2" size="md">
        Language
      </Heading>
      <Text>
        The authoritative version of these Terms is in English. Translations are
        provided for convenience only.
      </Text>

      <Text fontStyle="italic" mt={6}>
        © 2026 Caravana Studio LLC. All rights reserved.
      </Text>
    </Stack>
  </>
);


const SPANISH_TERMS_AND_CONDITIONS = (
  <>
    <Heading as="h1" mb={6}>
      Jokers of Neon – Términos y Condiciones
      <br />
      Temporada 1
    </Heading>

    <Stack spacing={4}>
      <Text>
        <strong>Fecha de vigencia:</strong> 12 de enero de 2026
        <br />
        <strong>Entidad:</strong> Caravana Studio LLC (Delaware, EE. UU.)
        <br />
        <strong>Contacto:</strong> gm@jokersofneon.com
      </Text>

      <Heading as="h2" size="md">
        TL;DR (Resumen)
      </Heading>
      <Text>
        – Jokers of Neon es un juego de cartas estratégico basado en habilidad
        en la <strong>Temporada 1</strong>.
        <br />
        – Debes tener al menos <strong>13 años</strong> para jugar.
        <br />
        – Los Season Passes y packs de cartas se venden en <strong>USD vía Stripe en escritorio</strong>
        y con <strong>Apple Pay en iOS</strong> o <strong>Google Pay en Android</strong> (la moneda puede variar).
        <br />
        – Todas las ventas son finales, salvo que la ley aplicable disponga lo contrario
        o exista un fallo técnico verificado.
        <br />
        – Las cartas obtenidas o compradas pueden ser <strong>NFTs en Starknet</strong>.
        <br />
        – No operamos un marketplace ni somos responsables por intercambios externos.
        <br />
        – Los NFTs son coleccionables, no inversiones, y no tienen valor garantizado.
        <br />
        – Podemos reequilibrar el juego, reiniciar progreso, suspender cuentas o restringir activos.
        <br />
        – El Juego se proporciona “tal cual” y “según disponibilidad”.
      </Text>

      <Heading as="h2" size="md">
        1. Aceptación de los Términos
      </Heading>
      <Text>
        Al acceder o utilizar <strong>Jokers of Neon</strong> (“el Juego”),
        aceptas quedar vinculado por estos Términos y por nuestra{" "}
        <Link href="https://jokersofneon.com/privacy-policy" isExternal color="blue.500">
          Política de Privacidad
        </Link>
        . Si no estás de acuerdo, no debes acceder ni utilizar el Juego.
      </Text>

      <Heading as="h2" size="md">
        2. Sobre el Juego
      </Heading>
      <Text>
        Jokers of Neon es un juego digital de cartas estratégicas desarrollado y
        operado por <strong>Caravana Studio LLC</strong> (“Caravana Studio”,
        “nosotros”). El Juego se ofrece como <strong>Temporada 1</strong>
        y se encuentra en desarrollo activo.
      </Text>

      <Heading as="h2" size="md">
        3. Elegibilidad y Cuentas
      </Heading>
      <Text>
        Debes tener al menos <strong>13 años</strong> para jugar. Puedes acceder
        como invitado o autenticarte mediante <strong>Cartridge Controller</strong>,
        el cual está sujeto a sus propios términos y políticas.
        <br />
        <br />
        Eres responsable de mantener la confidencialidad y seguridad de tus
        credenciales y de toda actividad realizada desde tu cuenta.
      </Text>

      <Heading as="h2" size="md">
        4. Servicio en vivo y actualizaciones de temporada
      </Heading>
      <Text>
        El Juego es un servicio en vivo y puede contener errores, fallos,
        funcionalidades incompletas, problemas de balance o interrupciones
        temporales. El contenido, progreso, rankings, recompensas o mecánicas
        pueden cambiar, reiniciarse o eliminarse en cualquier momento, incluso
        durante la Temporada 1 o entre temporadas.
      </Text>

      <Heading as="h2" size="md">
        5. Compras, Pagos y Reembolsos
      </Heading>
      <Text>
        Los Season Passes y packs de cartas se venden en <strong>USD vía Stripe en escritorio</strong>.
        En iOS, las compras se realizan con <strong>Apple Pay</strong>; en Android,
        con <strong>Google Pay</strong>. La moneda puede variar según la región y
        la plataforma. Aceptamos los métodos de pago soportados por Stripe para
        compras en escritorio. Todas las compras son <strong>compras únicas</strong>.
        <br />
        <br />
        Al usar Apple Pay o Google Pay, aceptas los términos y políticas aplicables
        de Apple y Google y eres responsable de cumplirlos.
        <br />
        <br />
        <strong>Todas las ventas son finales</strong>, salvo que la ley aplicable
        disponga lo contrario o en caso de un fallo técnico verificado. Los
        precios pueden no incluir impuestos aplicables, los cuales podrán ser
        calculados y cobrados por Stripe, Apple o Google al finalizar la compra.
        <br />
        <br />
        Los contracargos, reversiones de pago o actividad fraudulenta pueden
        resultar en suspensión o terminación del acceso, congelación de la
        cuenta y restricciones sobre los activos digitales asociados.
      </Text>

      <Heading as="h2" size="md">
        6. Activos Digitales y NFTs
      </Heading>
      <Text>
        Al progresar durante la Temporada o realizar compras, puedes recibir
        coleccionables digitales representados como{" "}
        <strong>tokens no fungibles (NFTs)</strong> acuñados automáticamente en
        la <strong>mainnet de Starknet</strong>.
        <br />
        <br />
        La propiedad de un NFT no otorga derechos de propiedad intelectual sobre
        el Juego.
      </Text>

      <Heading as="h2" size="md">
        7. Licencia de NFTs y Exención de Inversión
      </Heading>
      <Text>
        La propiedad de un NFT otorga una licencia limitada, no exclusiva,
        revocable y no transferible para usar y mostrar la carta asociada dentro
        del Juego y para exhibición personal no comercial.
        <br />
        <br />
        Los NFTs son <strong>coleccionables</strong>, no tienen{" "}
        <strong>valor ni utilidad garantizados</strong> y{" "}
        <strong>no están destinados como inversión</strong>. No existe
        expectativa de beneficio económico.
      </Text>

      <Heading as="h2" size="md">
        8. Ausencia de Marketplace
      </Heading>
      <Text>
        Caravana Studio no opera ni facilita ningún marketplace de NFTs. Cualquier
        transferencia o intercambio externo ocurre de forma independiente y
        bajo tu propio riesgo. No somos responsables por plataformas de terceros,
        pérdidas, estafas o disputas.
      </Text>

      <Heading as="h2" size="md">
        9. Balance y Modificaciones del Juego
      </Heading>
      <Text>
        Todas las cartas siguen siendo jugables entre temporadas. Nos reservamos
        el derecho de modificar o reequilibrar mecánicas, efectos o reglas en
        cualquier momento, incluso si dichos cambios afectan la utilidad o
        valor percibido de los activos digitales.
      </Text>

      <Heading as="h2" size="md">
        10. Conducta del Usuario
      </Heading>
      <Text>
        No está permitido hacer trampas, explotar errores, automatizar gameplay,
        manipular sistemas económicos o interrumpir servidores. Las infracciones
        pueden resultar en suspensión, terminación, reinicio de progreso,
        baneos o restricciones sobre NFTs, incluyendo marcarlos como no
        comercializables.
      </Text>

      <Heading as="h2" size="md">
        11. Propiedad Intelectual
      </Heading>
      <Text>
        Todo el contenido del Juego es propiedad de{" "}
        <strong>Caravana Studio LLC</strong>. No se conceden derechos o licencias
        salvo los expresamente indicados.
      </Text>

      <Heading as="h2" size="md">
        12. Servicios de Terceros
      </Heading>
      <Text>
        El Juego puede integrar o depender de servicios de terceros, incluyendo
        Cartridge Controller, Stripe, Apple Pay, Google Pay, proveedores de
        analítica e infraestructura blockchain. Apple Inc. y Google LLC no son
        responsables del Juego, su contenido ni sus activos digitales.
      </Text>

      <Heading as="h2" size="md">
        13. Cumplimiento de Exportaciones y Sanciones
      </Heading>
      <Text>
        No puedes acceder ni utilizar el Juego si te encuentras en una
        jurisdicción sujeta a sanciones de EE. UU. o donde su uso viole leyes
        aplicables.
      </Text>

      <Heading as="h2" size="md">
        14. Terminación y Medidas
      </Heading>
      <Text>
        Podemos suspender o terminar cuentas, congelar accesos, reiniciar
        progreso o restringir activos digitales en casos de fraude, abuso,
        contracargos o violaciones de estos Términos.
      </Text>

      <Heading as="h2" size="md">
        15. Exenciones de Responsabilidad
      </Heading>
      <Text>
        EL JUEGO SE PROPORCIONA <strong>“TAL CUAL”</strong> Y{" "}
        <strong>“SEGÚN DISPONIBILIDAD”</strong>, SIN GARANTÍAS DE NINGÚN TIPO,
        EXPRESAS O IMPLÍCITAS.
      </Text>

      <Heading as="h2" size="md">
        16. Limitación de Responsabilidad
      </Heading>
      <Text>
        EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, CARAVANA STUDIO LLC, SUS
        AFILIADOS Y MIEMBROS DEL EQUIPO NO SERÁN RESPONSABLES POR DAÑOS
        INDIRECTOS, INCIDENTALES O CONSECUENTES.
      </Text>

      <Heading as="h2" size="md">
        17. Indemnización
      </Heading>
      <Text>
        Aceptas indemnizar y mantener indemne a Caravana Studio LLC, sus
        afiliados y miembros del equipo frente a reclamaciones, daños o
        responsabilidades derivadas de tu uso del Juego o incumplimiento de
        estos Términos.
      </Text>

      <Heading as="h2" size="md">
        18. Actualizaciones de los Términos
      </Heading>
      <Text>
        Podemos modificar estos Términos en cualquier momento. El uso continuado
        del Juego tras los cambios implica la aceptación de la versión
        actualizada.
      </Text>

      <Heading as="h2" size="md">
        19. Ley Aplicable
      </Heading>
      <Text>
        Estos Términos se rigen por las leyes del{" "}
        <strong>Estado de Delaware, EE. UU.</strong>.
      </Text>

      <Heading as="h2" size="md">
        Idioma
      </Heading>
      <Text>
        La versión autoritativa de estos Términos es la versión en inglés. Las
        traducciones se proporcionan solo por conveniencia.
      </Text>

      <Text fontStyle="italic" mt={6}>
        © 2026 Caravana Studio LLC. Todos los derechos reservados.
      </Text>
    </Stack>
  </>
);


const PORTUGUESE_TERMS_AND_CONDITIONS = (
  <>
    <Heading as="h1" mb={6}>
      Jokers of Neon – Termos e Condições
      <br />
      Temporada 1
    </Heading>

    <Stack spacing={4}>
      <Text>
        <strong>Data de vigência:</strong> 12 de janeiro de 2026
        <br />
        <strong>Entidade:</strong> Caravana Studio LLC (Delaware, EUA)
        <br />
        <strong>Contato:</strong> gm@jokersofneon.com
      </Text>

      <Heading as="h2" size="md">
        TL;DR (Resumo)
      </Heading>
      <Text>
        – Jokers of Neon é um jogo de cartas estratégico baseado em habilidade
        na <strong>Temporada 1</strong>.
        <br />
        – É necessário ter pelo menos <strong>13 anos</strong> para jogar.
        <br />
        – Season Passes e pacotes de cartas são vendidos em <strong>USD via Stripe no desktop</strong>
        e com <strong>Apple Pay no iOS</strong> ou <strong>Google Pay no Android</strong> (a moeda pode variar).
        <br />
        – Todas as vendas são finais, salvo quando exigido por lei ou em caso de
        falha técnica verificada.
        <br />
        – As cartas obtidas ou compradas podem ser <strong>NFTs na Starknet</strong>.
        <br />
        – Não operamos um marketplace nem somos responsáveis por trocas externas.
        <br />
        – NFTs são colecionáveis, não investimentos, e não possuem valor garantido.
        <br />
        – Podemos rebalancear o jogo, redefinir progresso, suspender contas ou
        restringir ativos.
        <br />
        – O Jogo é fornecido “como está” e “conforme disponibilidade”.
      </Text>

      <Heading as="h2" size="md">
        1. Aceitação dos Termos
      </Heading>
      <Text>
        Ao acessar ou utilizar <strong>Jokers of Neon</strong> (“o Jogo”),
        você concorda em ficar vinculado a estes Termos e à nossa{" "}
        <Link href="https://jokersofneon.com/privacy-policy" isExternal color="blue.500">
          Política de Privacidade
        </Link>
        . Caso não concorde, você não deve acessar nem utilizar o Jogo.
      </Text>

      <Heading as="h2" size="md">
        2. Sobre o Jogo
      </Heading>
      <Text>
        Jokers of Neon é um jogo digital de cartas estratégicas desenvolvido e
        operado pela <strong>Caravana Studio LLC</strong> (“Caravana Studio”,
        “nós”). O Jogo é oferecido como <strong>Temporada 1</strong>
        e está em desenvolvimento ativo.
      </Text>

      <Heading as="h2" size="md">
        3. Elegibilidade e Contas
      </Heading>
      <Text>
        Você deve ter pelo menos <strong>13 anos</strong> para jogar. É possível
        acessar o Jogo como convidado ou autenticar-se por meio do{" "}
        <strong>Cartridge Controller</strong>, que está sujeito aos seus próprios
        termos e políticas.
        <br />
        <br />
        Você é responsável por manter a confidencialidade e a segurança de suas
        credenciais e por toda atividade realizada em sua conta.
      </Text>

      <Heading as="h2" size="md">
        4. Serviço ao vivo e atualizações de temporada
      </Heading>
      <Text>
        O Jogo é um serviço ao vivo e pode conter bugs, erros,
        funcionalidades incompletas, problemas de balanceamento ou interrupções
        temporárias. Conteúdo, progresso, rankings, recompensas ou mecânicas
        podem ser alterados, redefinidos ou removidos a qualquer momento,
        inclusive durante a Temporada 1 ou entre temporadas.
      </Text>

      <Heading as="h2" size="md">
        5. Compras, Pagamentos e Reembolsos
      </Heading>
      <Text>
        Season Passes e pacotes de cartas são vendidos em <strong>USD via Stripe no desktop</strong>.
        No iOS, as compras são feitas com <strong>Apple Pay</strong>; no Android,
        com <strong>Google Pay</strong>. A moeda pode variar por região e plataforma.
        Aceitamos os métodos de pagamento suportados pelo Stripe para compras no
        desktop. Todas as compras são <strong>compras únicas</strong>.
        <br />
        <br />
        Ao usar Apple Pay ou Google Pay, você concorda com os termos e políticas
        aplicáveis da Apple e do Google e é responsável por cumpri-los.
        <br />
        <br />
        <strong>Todas as vendas são finais</strong>, salvo quando exigido por lei
        ou em caso de falha técnica verificada. Os preços podem não incluir
        impostos aplicáveis, que poderão ser calculados e cobrados pelo Stripe,
        Apple ou Google no checkout.
        <br />
        <br />
        Estornos, chargebacks ou atividades fraudulentas podem resultar na
        suspensão ou encerramento do acesso, congelamento da conta e restrições
        aplicadas aos ativos digitais associados.
      </Text>

      <Heading as="h2" size="md">
        6. Ativos Digitais e NFTs
      </Heading>
      <Text>
        Ao progredir durante a Temporada ou realizar compras, você pode receber
        colecionáveis digitais representados como{" "}
        <strong>tokens não fungíveis (NFTs)</strong> cunhados automaticamente na{" "}
        <strong>mainnet da Starknet</strong>.
        <br />
        <br />
        A posse de um NFT não concede quaisquer direitos de propriedade
        intelectual sobre o Jogo.
      </Text>

      <Heading as="h2" size="md">
        7. Licença de NFTs e Isenção de Investimento
      </Heading>
      <Text>
        A posse de um NFT concede uma licença limitada, não exclusiva,
        revogável e não transferível para utilizar e exibir a carta associada
        dentro do Jogo e para exibição pessoal não comercial.
        <br />
        <br />
        NFTs são <strong>colecionáveis</strong>, não possuem{" "}
        <strong>valor ou utilidade garantidos</strong> e{" "}
        <strong>não são destinados como investimento</strong>. Não há
        expectativa de lucro, valorização ou retorno financeiro.
      </Text>

      <Heading as="h2" size="md">
        8. Ausência de Marketplace
      </Heading>
      <Text>
        A Caravana Studio não opera, facilita ou endossa qualquer marketplace de
        NFTs. Qualquer transferência ou negociação externa ocorre de forma
        independente e por sua conta e risco. Não nos responsabilizamos por
        plataformas de terceiros, perdas, golpes ou disputas.
      </Text>

      <Heading as="h2" size="md">
        9. Balanceamento e Modificações do Jogo
      </Heading>
      <Text>
        Todas as cartas permanecem jogáveis entre temporadas. Reservamo-nos o
        direito de modificar, rebalancear ou ajustar mecânicas, efeitos,
        recompensas ou regras a qualquer momento, mesmo que tais alterações
        afetem a utilidade ou o valor percebido dos ativos digitais.
      </Text>

      <Heading as="h2" size="md">
        10. Conduta do Usuário
      </Heading>
      <Text>
        Não é permitido trapacear, explorar bugs, automatizar o gameplay,
        manipular sistemas econômicos ou interromper servidores. Violações podem
        resultar em suspensão, encerramento da conta, redefinição de progresso,
        banimento ou restrições sobre NFTs, incluindo marcá-los como não
        comercializáveis.
      </Text>

      <Heading as="h2" size="md">
        11. Propriedade Intelectual
      </Heading>
      <Text>
        Todo o conteúdo do Jogo é de propriedade da{" "}
        <strong>Caravana Studio LLC</strong>. Nenhum direito ou licença é concedido
        exceto conforme expressamente indicado nestes Termos.
      </Text>

      <Heading as="h2" size="md">
        12. Serviços de Terceiros
      </Heading>
      <Text>
        O Jogo pode integrar ou depender de serviços de terceiros, incluindo
        Cartridge Controller, Stripe, Apple Pay, Google Pay, provedores de
        analytics e infraestrutura blockchain. Apple Inc. e Google LLC não são
        responsáveis pelo Jogo, seu conteúdo ou seus ativos digitais.
      </Text>

      <Heading as="h2" size="md">
        13. Conformidade com Exportações e Sanções
      </Heading>
      <Text>
        Você não pode acessar ou utilizar o Jogo se estiver localizado em uma
        jurisdição sujeita a sanções dos Estados Unidos ou onde o uso do Jogo
        viole leis ou regulamentos aplicáveis.
      </Text>

      <Heading as="h2" size="md">
        14. Rescisão e Medidas
      </Heading>
      <Text>
        Podemos suspender ou encerrar contas, congelar acessos, redefinir
        progresso ou restringir ativos digitais em casos de fraude, abuso,
        chargebacks ou violações destes Termos.
      </Text>

      <Heading as="h2" size="md">
        15. Isenções de Responsabilidade
      </Heading>
      <Text>
        O JOGO É FORNECIDO <strong>“COMO ESTÁ”</strong> E{" "}
        <strong>“CONFORME DISPONIBILIDADE”</strong>, SEM GARANTIAS DE QUALQUER
        TIPO, EXPRESSAS OU IMPLÍCITAS.
      </Text>

      <Heading as="h2" size="md">
        16. Limitação de Responsabilidade
      </Heading>
      <Text>
        NA MÁXIMA EXTENSÃO PERMITIDA POR LEI, A CARAVANA STUDIO LLC, SEUS
        AFILIADOS E MEMBROS DA EQUIPE NÃO SERÃO RESPONSÁVEIS POR DANOS
        INDIRETOS, INCIDENTAIS OU CONSEQUENCIAIS.
      </Text>

      <Heading as="h2" size="md">
        17. Indenização
      </Heading>
      <Text>
        Você concorda em indenizar e isentar a Caravana Studio LLC, seus
        afiliados e membros da equipe de quaisquer reclamações, danos,
        responsabilidades ou despesas decorrentes do uso do Jogo ou da violação
        destes Termos.
      </Text>

      <Heading as="h2" size="md">
        18. Atualizações destes Termos
      </Heading>
      <Text>
        Podemos modificar estes Termos a qualquer momento. O uso continuado do
        Jogo após quaisquer alterações constitui aceitação da versão atualizada.
      </Text>

      <Heading as="h2" size="md">
        19. Lei Aplicável
      </Heading>
      <Text>
        Estes Termos são regidos pelas leis do{" "}
        <strong>Estado de Delaware, EUA</strong>, sem consideração a conflitos de leis.
      </Text>

      <Heading as="h2" size="md">
        Idioma
      </Heading>
      <Text>
        A versão autoritativa destes Termos é a versão em inglês. As traduções
        são fornecidas apenas por conveniência.
      </Text>

      <Text fontStyle="italic" mt={6}>
        © 2026 Caravana Studio LLC. Todos os direitos reservados.
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
