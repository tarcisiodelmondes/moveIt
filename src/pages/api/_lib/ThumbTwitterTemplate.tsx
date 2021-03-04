interface GetHtmlProps {
  level: string;
  currentExperience: string;
  completedChallenges: string;
}

export function getHtml({
  level,
  currentExperience,
  completedChallenges,
}: GetHtmlProps) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content="Move.it" />
        <meta property="og:description" content="teste" />

        <meta property="og:image" content="https://moveit-next-tarcisiodelmondes.vercel.app/api/thumbnail.png?level=23&currentExperience=200&completedChallenges=17" />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Teste move.it" />
        <meta name="twitter:description" content="Teste thumb" />
        <meta name="twitter:image" content="https://moveit-next-tarcisiodelmondes.vercel.app/api/thumbnail.png?level=23&currentExperience=200&completedChallenges=17" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
        rel="stylesheet"
      />
  
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
  
        html {
          font-size: 100%;
          font-family: "Inter", Arial, Helvetica, sans-serif;
        }
  
        .container {
          height: 100vh;
          padding: 0 0 0 10%;
  
          display: flex;
          flex: 1;
  
          text-align: center;
        }
  
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          flex: 1;
          gap: 5rem;
          margin-top: 1rem
        }
  
        header {
          font-size: 20rem;
          font-weight: 600;
          color: #5965e0;
          background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU0IiBoZWlnaHQ9Ijk0IiB2aWV3Qm94PSIwIDAgMTU0IDk0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyOS40MzMgMTEuOTUxMkMxMjkuMjY2IDE5LjQxOTIgMTM0LjU2OCAyMi45NDE3IDEzNC41NjggMjIuOTQxN0MxMzQuNTY4IDIyLjk0MTcgMTQwLjExOCAxOC44ODQ1IDE0MC4yNzkgMTEuNjA3N0MxNDAuNDQ0IDQuMzE4MDYgMTM0LjM0NSAwLjA0MDUyNzMgMTM0LjM0NSAwLjA0MDUyNzNDMTM0LjM0NSAwLjA0MDUyNzMgMTI5LjU5NiA0LjQ4MTk3IDEyOS40MzMgMTEuOTUxMlpNMTE5LjQzNSAyOS43MDlDMTIxLjYyNyAzNi42NDgxIDEyOC4wNzggMzguOTQ5OSAxMjguMDc4IDM4Ljk0OTlDMTI4LjA3OCAzOC45NDk5IDEzMi4xOTMgMzQuMDQ5NCAxMjkuOTQ5IDI2LjkyNjlDMTI3LjY5NiAxOS44MDY0IDEyMS45MSAxNi45MTYgMTIxLjkxIDE2LjkxNkMxMjEuOTEgMTYuOTE2IDExNy4yNDcgMjIuNzcxMiAxMTkuNDM1IDI5LjcwOVpNMTQxLjI3NSAyNi4yNDg1QzEzNy4wMTIgMzIuMzgwOCAxMzkuNDc4IDM4LjI4MjQgMTM5LjQ3OCAzOC4yODI0QzEzOS40NzggMzguMjgyNCAxNDYuMzI3IDM3Ljk5MjQgMTUwLjQ3MiAzMi4wMDc3QzE1NC42MyAyNi4wMjY1IDE1MS45MjkgMTkuMDYxNCAxNTEuOTI5IDE5LjA2MTRDMTUxLjkyOSAxOS4wNjE0IDE0NS41MzQgMjAuMTEwOSAxNDEuMjc1IDI2LjI0ODVaTTEyNS4zMTEgNDYuNjAyN0MxMjYuNjExIDUzLjk1OSAxMjEuODk3IDU4LjI4NTkgMTIxLjg5NyA1OC4yODU5QzEyMS44OTcgNTguMjg1OSAxMTUuNzk2IDU1LjE1NTMgMTE0LjUyNiA0Ny45OTA4QzExMy4yNzIgNDAuODIxMiAxMTguNjQ4IDM1LjYyNTEgMTE4LjY0OCAzNS42MjUxQzExOC42NDggMzUuNjI1MSAxMjQuMDA5IDM5LjI1MDcgMTI1LjMxMSA0Ni42MDI3Wk0xMTQuNTk1IDU5LjQ1MDVDMTEzLjk4NyA1MS45OTUyIDEwOC45OTQgNDcuODgwOSAxMDguOTk0IDQ3Ljg4MDlDMTA4Ljk5NCA0Ny44ODA5IDEwMy4xNTMgNTIuNTQ4NCAxMDMuNzQ1IDU5LjgwNjdDMTA0LjMzNyA2Ny4wNjUxIDExMC4xMDQgNzAuNzU4MSAxMTAuMTA0IDcwLjc1ODFDMTEwLjEwNCA3MC43NTgxIDExNS4xOTkgNjYuOTAwMyAxMTQuNTk1IDU5LjQ1MDVaTTk0LjY2MjMgODIuMzY3M0M5NC42NjIzIDgyLjM2NzMgOTAuMTk0OCA3Ny4xNTkzIDkxLjcwODcgNzAuMDI5MUM5My4yMjY4IDYyLjkwMDEgMTAwLjE2IDYwLjExNzUgMTAwLjE2IDYwLjExNzVDMTAwLjE2IDYwLjExNzUgMTAzLjc1MiA2NS41MDg4IDEwMi4yMDIgNzIuODI2NUMxMDAuNjQ3IDgwLjE0MzEgOTQuNjYyMyA4Mi4zNjczIDk0LjY2MjMgODIuMzY3M1pNMTM1LjQ4NSA1My4xODgyQzEzNS40ODUgNTMuMTg4MiAxMzQuODcxIDQ2LjgxNDIgMTQwLjczMSA0Mi4yMTE0QzE0Ni42MDUgMzcuNjA3OCAxNTMuMDE1IDM4LjQ5NDUgMTUzLjAxNSAzOC40OTQ1QzE1My4wMTUgMzguNDk0NSAxNTMuNTU1IDQ1Ljk2MzggMTQ3LjgzMSA1MC40NTE1QzE0Mi4xMDUgNTQuOTQzNCAxMzUuNDg1IDUzLjE4ODIgMTM1LjQ4NSA1My4xODgyWk0xMzQuMDk5IDU3LjYzNTVDMTI3LjM2MyA2MC44MjQyIDEyNi41NTQgNjcuMTc5NSAxMjYuNTU0IDY3LjE3OTVDMTI2LjU1NCA2Ny4xNzk1IDEzMi42MjMgNzAuMzYxMiAxMzkuMTg4IDY3LjI2NDVDMTQ1Ljc1MyA2NC4xNjc4IDE0Ni44ODIgNTYuNzU1NCAxNDYuODgyIDU2Ljc1NTRDMTQ2Ljg4MiA1Ni43NTU0IDE0MC44MzcgNTQuNDU2NiAxMzQuMDk5IDU3LjYzNTVaTTExNS43OTUgNzcuODQ1MkMxMTUuNzk1IDc3Ljg0NTIgMTE4LjQ3NyA3Mi4wMjM5IDEyNS44NSA3MS4wMzlDMTMzLjIzMiA3MC4wNTIgMTM4LjI4OSA3NC4wODI0IDEzOC4yODkgNzQuMDgyNEMxMzguMjg5IDc0LjA4MjQgMTM0Ljk4MiA4MC44MDU1IDEyNy43OTggODEuNzY3NkMxMjAuNjA4IDgyLjczMjggMTE1Ljc5NSA3Ny44NDUyIDExNS43OTUgNzcuODQ1MlpNMTIzLjE1OSA4Ni43NTI2QzEyMy4xNTkgODYuNzUyNiAxMTguNjA0IDgyLjE0NTIgMTExLjE3IDgyLjIzMjhDMTAzLjc0IDgyLjMyNTcgMTAwLjM5OCA4Ny43ODIxIDEwMC4zOTggODcuNzgyMUMxMDAuMzk4IDg3Ljc4MjEgMTA0LjU5MSA5My4yMTQ4IDExMS44MzYgOTMuMTMxOUMxMTkuMDg3IDkzLjAyNzUgMTIzLjE1OSA4Ni43NTI2IDEyMy4xNTkgODYuNzUyNlpNMTMyLjczMSAyNi45MjgzTDEzNi4yMjEgMjYuMjMzOUMxMzYuMjkyIDI2LjYxNTUgMTQzLjA1IDY0LjYzMTggODguMzgyNiA5MC45MjM0TDg2Ljg2NTggODcuNzEyOUMxMzguOTAyIDYyLjY3NiAxMzMuMDExIDI4LjM3MDggMTMyLjczMSAyNi45MjgzWk0xMS43NTQyIDI2LjU0ODhDMTYuMDE2NiAzMi42ODExIDEzLjU1MTEgMzguNTgyNyAxMy41NTExIDM4LjU4MjdDMTMuNTUxMSAzOC41ODI3IDYuNzAyMjEgMzguMjkyNyAyLjU1NjkxIDMyLjMwOEMtMS42MDExNSAyNi4zMjY4IDEuMDk5NTcgMTkuMzYxNyAxLjA5OTU3IDE5LjM2MTdDMS4wOTk1NyAxOS4zNjE3IDcuNDk0OTIgMjAuNDExMiAxMS43NTQyIDI2LjU0ODhaTTI0Ljk1MTcgMzkuMjUwMkMyNC45NTE3IDM5LjI1MDIgMzEuNDAyNiAzNi45NDgzIDMzLjU5NDcgMzAuMDA5M0MzNS43ODI2IDIzLjA3MTUgMzEuMTE5OSAxNy4yMTYzIDMxLjExOTkgMTcuMjE2M0MzMS4xMTk5IDE3LjIxNjMgMjUuMzMzMiAyMC4xMDY3IDIzLjA4MDIgMjcuMjI3MkMyMC44MzY5IDM0LjM0OTcgMjQuOTUxNyAzOS4yNTAyIDI0Ljk1MTcgMzkuMjUwMlpNMzEuMTMyNCA1OC41ODYyQzMxLjEzMjQgNTguNTg2MiAyNi40MTg0IDU0LjI1OTMgMjcuNzE4NSA0Ni45MDNDMjkuMDE5NyAzOS41NTEgMzQuMzgxMiAzNS45MjU0IDM0LjM4MTIgMzUuOTI1NEMzNC4zODEyIDM1LjkyNTQgMzkuNzU3IDQxLjEyMTUgMzguNTAyNyA0OC4yOTExQzM3LjIzMzQgNTUuNDU1NiAzMS4xMzI0IDU4LjU4NjIgMzEuMTMyNCA1OC41ODYyWk00NC4wMzU0IDQ4LjE4MTJDNDQuMDM1NCA0OC4xODEyIDM5LjA0MjIgNTIuMjk1NSAzOC40MzQ4IDU5Ljc1MDdDMzcuODMwNSA2Ny4yMDA2IDQyLjkyNTIgNzEuMDU4NCA0Mi45MjUyIDcxLjA1ODRDNDIuOTI1MiA3MS4wNTg0IDQ4LjY5MyA2Ny4zNjUzIDQ5LjI4NDcgNjAuMTA3QzQ5Ljg3NjQgNTIuODQ4NyA0NC4wMzU0IDQ4LjE4MTIgNDQuMDM1NCA0OC4xODEyWk02MS4zMjA0IDcwLjMyOTRDNjIuODM0MiA3Ny40NTk2IDU4LjM2NjggODIuNjY3NiA1OC4zNjY4IDgyLjY2NzZDNTguMzY2OCA4Mi42Njc2IDUyLjM4MjEgODAuNDQzNCA1MC44Mjc0IDczLjEyNjhDNDkuMjc2OSA2NS44MDkgNTIuODY5NCA2MC40MTc4IDUyLjg2OTQgNjAuNDE3OEM1Mi44Njk0IDYwLjQxNzggNTkuODAyMiA2My4yMDA0IDYxLjMyMDQgNzAuMzI5NFpNMTguNDYxMSAyMy4yNDJDMTguNDYxMSAyMy4yNDIgMjMuNzYzNiAxOS43MTk1IDIzLjU5NjQgMTIuMjUxNUMyMy40MzM1IDQuNzgyMjYgMTguNjg0MyAwLjM0MDgyMSAxOC42ODQzIDAuMzQwODIxQzE4LjY4NDMgMC4zNDA4MjEgMTIuNTg1IDQuNjE4MzYgMTIuNzQ5OSAxMS45MDhDMTIuOTExNSAxOS4xODQ4IDE4LjQ2MTEgMjMuMjQyIDE4LjQ2MTEgMjMuMjQyWk0xMi4yOTggNDIuNTExN0MxOC4xNTgxIDQ3LjExNDUgMTcuNTQzOCA1My40ODg1IDE3LjU0MzggNTMuNDg4NUMxNy41NDM4IDUzLjQ4ODUgMTAuOTIzNyA1NS4yNDM3IDUuMTk4MTkgNTAuNzUxOEMtMC41MjYxNjYgNDYuMjY0MSAwLjAxMzU4NzMgMzguNzk0OCAwLjAxMzU4NzMgMzguNzk0OEMwLjAxMzU4NzMgMzguNzk0OCA2LjQyMzkgMzcuOTA4MSAxMi4yOTggNDIuNTExN1pNMjYuNDc1MiA2Ny40Nzk4QzI2LjQ3NTIgNjcuNDc5OCAyNS42NjY0IDYxLjEyNDUgMTguOTMwNCA1Ny45MzU4QzEyLjE5MjUgNTQuNzU2OSA2LjE0NyA1Ny4wNTU3IDYuMTQ3IDU3LjA1NTdDNi4xNDcgNTcuMDU1NyA3LjI3NTY2IDY0LjQ2ODEgMTMuODQwOSA2Ny41NjQ4QzIwLjQwNjIgNzAuNjYxNSAyNi40NzUyIDY3LjQ3OTggMjYuNDc1MiA2Ny40Nzk4Wk0yNy4xNzk1IDcxLjMzOTNDMzQuNTUyMiA3Mi4zMjQyIDM3LjIzNDcgNzguMTQ1NCAzNy4yMzQ3IDc4LjE0NTRDMzcuMjM0NyA3OC4xNDU0IDMyLjQyMTMgODMuMDMzMSAyNS4yMzE4IDgyLjA2NzlDMTguMDQ3NyA4MS4xMDU4IDE0Ljc0MDMgNzQuMzgyNyAxNC43NDAzIDc0LjM4MjdDMTQuNzQwMyA3NC4zODI3IDE5Ljc5NzEgNzAuMzUyMyAyNy4xNzk1IDcxLjMzOTNaTTQxLjg1ODYgODIuNTMzMUMzNC40MjUyIDgyLjQ0NTUgMjkuODY5OCA4Ny4wNTI5IDI5Ljg2OTggODcuMDUyOUMyOS44Njk4IDg3LjA1MjkgMzMuOTQyNCA5My4zMjc4IDQxLjE5MzIgOTMuNDMyMkM0OC40MzgyIDkzLjUxNTEgNTIuNjMxIDg4LjA4MjQgNTIuNjMxIDg4LjA4MjRDNTIuNjMxIDg4LjA4MjQgNDkuMjg4OSA4Mi42MjYgNDEuODU4NiA4Mi41MzMxWk0xNi44MDgzIDI2LjUzNDJMMjAuMjk3OCAyNy4yMjg2QzIwLjAxODMgMjguNjcxMSAxNC4xMjczIDYyLjk3NjMgNjYuMTYzNCA4OC4wMTMyTDY0LjY0NjYgOTEuMjIzN0M5Ljk3OTEzIDY0LjkzMjEgMTYuNzM3MiAyNi45MTU4IDE2LjgwODMgMjYuNTM0MloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9Ijc2LjUxNDUiIHkxPSIwLjA0MDUyNzMiIHgyPSI3Ni41MTQ1IiB5Mj0iOTMuNDMzMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRENEREUwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RDRERFMCIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==")
            no-repeat center;
          background-size: contain;
        }
  
        .div-1 > strong {
          font-weight: 600;
          font-size: 3.5rem;
          text-align: center;
          line-height: 4.2rem;
  
          color: #2e384d;
        }
  
        .div-2 {
          text-align: left;
          margin-top: 3.1rem;
        }
  
        .div-2 .h2-style {
          color: rgb(185, 185, 185);
          font-size: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;
  
          line-height: 1.8;
        }
  
        .div-2 p {
          color: #666666;
          border-bottom: 1.5px solid #dcdde0;
          width: 65%;
          padding-bottom: 1.5rem;
          margin-bottom: 2rem;
        }
  
        .div-2 span {
          font-size: 500;
          font-size: 2.5rem;
          color: #666;
        }
  
        .div-2 span:first-child {
          color: #5965e0;
        }
  
        .svg {
          margin-top: 7rem;
        }
      </style>
  
      <title>Thumbnail</title>
    </head>
    <body>
      <div class="container">
        <div class="grid">
          <div class="div-1">
            <header>${level}</header>
  
            <strong>Avancei para o próximo level</strong>
          </div>
          <div class="div-2">
            <h2 class="h2-style">Desafios</h2>
            <p><span>${completedChallenges}</span> <span>completados</span></p>
  
            <h2 class="h2-style">Experiência</h2>
            <p><span>${currentExperience}</span> <span>xp</span></p>
  
            <div class="svg">
              <svg
                width="250"
                height="50"
                viewBox="0 0 250 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M107.307 22.0488L103.685 38.6822H94.2484L97.8707 22.0488C98.1546 20.7414 97.99 20.5004 96.6529 20.5004H93.2463C91.9177 20.5004 91.6395 20.7414 91.3585 22.0155C91.3585 22.0155 91.3585 22.0377 91.3585 22.0488L87.7362 38.6822H78.2914L81.9166 22.0488C82.2005 20.7414 82.0358 20.5004 80.6959 20.5004H77.2893C75.9494 20.5004 75.6797 20.7441 75.3959 22.0488L71.7707 38.6822H62.3345L67.8957 13.149H75.5605L76.7755 15.3428C77.4745 14.6247 78.3205 14.0583 79.2586 13.6803C80.1967 13.3023 81.2058 13.1213 82.2204 13.149H84.1763C87.8668 13.149 90.3564 14.714 91.2478 17.3593C92.8971 14.4176 95.2874 13.149 98.1745 13.149H100.133C105.677 13.149 108.496 16.6419 107.307 22.0488Z"
                    fill="#5965E0"
                  />
                  <path
                    d="M136.084 22.0487L134.4 29.7824C133.222 35.1893 128.879 38.6821 123.329 38.6821H116.181C110.639 38.6821 107.82 35.1865 108.999 29.7796L110.682 22.0487C111.857 16.6418 116.201 13.1489 121.753 13.1489H128.913C134.443 13.1489 137.265 16.6418 136.084 22.0487ZM126.639 22.0487C126.923 20.7413 126.758 20.5003 125.421 20.5003H122.015C120.675 20.5003 120.405 20.7441 120.121 22.0487L118.435 29.7796C118.151 31.087 118.318 31.328 119.655 31.328H123.062C124.399 31.328 124.672 31.0842 124.956 29.7796L126.639 22.0487Z"
                    fill="#5965E0"
                  />
                  <path
                    d="M194.975 20.0156C194.63 21.467 193.796 22.7639 192.607 23.6996L187.801 27.5775C186.649 28.523 185.199 29.0548 183.694 29.0843H177.039L176.889 29.7685C176.605 31.0759 176.77 31.3169 178.11 31.3169H192.508L190.907 38.671H174.624C169.082 38.671 166.263 35.1754 167.441 29.7685L169.125 22.0376C170.303 16.6307 174.646 13.1378 180.196 13.1378H187.361C192.889 13.1489 195.747 16.459 194.975 20.0156ZM185.09 22.0487C185.374 20.7413 185.21 20.5003 183.87 20.5003H180.463C179.129 20.4975 178.845 20.744 178.561 22.0487L177.993 24.7106H183.614C183.866 24.7004 184.108 24.6102 184.303 24.4537C184.497 24.2972 184.634 24.083 184.693 23.8436L185.09 22.0487Z"
                    fill="#5965E0"
                  />
                  <path
                    d="M205.583 34.3471C205.061 36.7431 203.122 38.6849 200.19 38.6849C197.257 38.6849 196.167 36.7459 196.689 34.3471C197.212 31.9484 199.151 30.0122 202.083 30.0122C205.016 30.0122 206.097 31.9484 205.583 34.3471Z"
                    fill="#4CD62B"
                  />
                  <path
                    d="M225.829 13.1489L224.228 20.4975L220.254 38.6794H210.82L214.795 20.4975H210.085L211.689 13.1461L225.829 13.1489ZM218.823 8.38186C217.188 6.60911 217.687 3.56772 219.933 1.59276C222.178 -0.382197 225.327 -0.542853 226.97 1.23267C228.614 3.0082 228.106 6.04958 225.86 8.02454C223.615 9.9995 220.461 10.1602 218.823 8.38186Z"
                    fill="#5965E0"
                  />
                  <path
                    d="M240.972 16.8246L238.15 29.7796C237.866 31.087 238.031 31.328 239.368 31.328H245.236L243.635 38.6821H235.888C230.346 38.6821 227.525 35.1865 228.703 29.7796L231.524 16.8246H227.956L229.557 9.47044H233.134L234.446 3.44861H243.89L242.579 9.47044H250.005L248.395 16.8246H240.972Z"
                    fill="#5965E0"
                  />
                  <path
                    d="M25.5088 3.745H37.4829L27.5215 50H15.5474L25.5088 3.745Z"
                    fill="#5965E0"
                  />
                  <path
                    d="M43.0786 3.745H55.0527L47.2914 39.9868H35.3145L43.0786 3.745Z"
                    fill="#5965E0"
                  />
                  <path
                    d="M7.76366 3.745H19.7378L11.9765 39.9868H-0.000488281L7.76366 3.745Z"
                    fill="#5965E0"
                  />
                  <path
                    d="M171.027 13.1489L153.531 38.6821H143.879L137.498 13.1489H147.834L150.613 29.9153L160.691 13.1628L171.027 13.1489Z"
                    fill="#5965E0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="250" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
}
