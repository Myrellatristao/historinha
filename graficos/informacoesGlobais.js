    const url = 'https://raw.githubsercontent.com/myrellatristao/api/main/dados-globai'

    async function vizualizarInformaçoesGlobais() {
        const res = await fetch(url)
        const dados = await res.json()
        const pessoasconectadas = (dados.total_pessoas_mundo / 1e9)
        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
        const horas = parseInt(dados.tempo_medio)
        const minutos = Math.round((dados.tempo_medio - horas) * 100)
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed

        const paragrafo = document.createElement('p')
        )
        )    }