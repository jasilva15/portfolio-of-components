import Container from '@components/base/Container.astro';
import { Astro } from './Layout.astro';

<Fragment>
<html lang="es-mx">
<head>
<meta charset="utf-8" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="viewport" content="width=device-width" />
<meta name="generator" content={Astro.generator} />
<title>{title}</title>
<meta name="description" content={description} />
</head>
<body>
<Container>
<h1>Astro</h1>
<main>
<slot />
</main>
</Container>
</body>
</html>

</Fragment>;
