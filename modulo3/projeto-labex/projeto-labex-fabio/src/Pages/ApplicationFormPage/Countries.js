import react from "react"

    const country = `Abecásia, Afeganistão, África do Sul, Albânia, Alemanha, Andorra, Angola, Antígua e Barbuda, Arábia Saudita, Argélia, Argentina, Armênia, Austrália, Áustria, Azerbaijão, Bahamas, Bahrein (ou Barein, ou Barém), Bangladesh, Barbados, Bélgica, Belize, Benim, Bielorrússia, Bolívia, Bósnia e Herzegovina, Botswana (ou Botsuana), Brasil, Brunei, Bulgária, Burkina Faso (ou Burquina Faso), Burundi, Butão, Cabo Verde, Camarões, Camboja, Canadá, Catar (ou Qatar), Cazaquistão, Chade, Chile, China, Chipre, Cingapura (ou Singapura), Colômbia, Comores, Congo, Coreia do Norte, Coreia do Sul, Costa do Marfim, Costa Rica, Croácia, Cuba, Dinamarca, Djibouti (ou Djibuti), Dominica, Egito, El Salvador, Emirados Árabes Unidos, Equador, Eritreia, Escócia Eslováquia, Eslovênia, Espanha, Estados Federados da Micronésia, Estados Unidos da América, Estônia, Eswatini (ou Essuatíni, ou Suazilândia), Etiópia, Fiji, Filipinas, Finlândia, França, Gabão, Gâmbia, Gana, Geórgia, Granada, Grécia, Guatemala, Guiana, Guiné, Guiné-Bissau, Guiné Equatorial, Haiti, Holanda, Honduras, Hungria, Iêmen, Índia, Indonésia, Inglaterra Irã (ou Irão), Iraque, Irlanda do Norte Irlanda, Islândia, Israel, Itália, Jamaica, Japão, Jordânia, Kiribati (ou Quiribati), Kosovo, Kuwait, Laos, Lesoto, Letônia, Líbano, Libéria, Líbia, Liechtenstein (ou Listenstaine), Lituânia, Luxemburgo, Macedônia do Norte, Madagascar (ou Madagáscar), Malásia, Malawi (ou Malauí), Maldivas, Mali, Malta, Marrocos, Marshall, Maurícia, Mauritânia, México, Mianmar, Micronésia, Moçambique, Moldávia, Mônaco, Mongólia, Montenegro, Namíbia, Nauru, Nepal, Nicarágua: Níger, Nigéria, Noruega, Nova Zelândia, Omã, Ossétia do Sul, País de Gales, Países Baixos, Palau, Palestina, Panamá, Papua-Nova Guiné, Paquistão, Paraguai, Peru, Polônia, Portugal, Qatar (ou Catar), Quênia, Quirguistão, Quiribati (ou Kiribati), Reino Unido, República Árabe Saaraui Democrática, República Centro-Africana, República Democrática do Congo, República do Congo, República Dominicana, República Tcheca (ou Tchéquia), República Turca de Chipre do Norte, Romênia, Ruanda, Rússia, Salomão, Samoa, San Marino (ou São Marinho), Santa Lúcia, São Cristóvão e Névis (ou São Cristóvão e Neves), São Tomé e Príncipe, São Vicente e Granadinas, Senegal, Serra Leoa, Sérvia, Seychelles (ou Seicheles), Singapura (ou Cingapura), Síria, Somália, Sri Lanka, Suazilândia, Sudão do Sul, Sudão, Suécia, Suíça, Suriname, Tailândia, Taiwan, Tajiquistão, Tanzânia, República Tcheca`

    const country2 = `Timor-Leste, Togo, Tonga, Trinidad e Tobago, Tunísia, Turcomenistão, Turquia, Tuvalu, Ucrânia, Uganda, Uruguai, Uzbequistão, Vanuatu, Vaticano, Venezuela, Vietnã, Zâmbia, Zimbábue`

    const countries = country.split(',')

    const countries2 = country2.split(',')

    export const countries3 = countries.concat(countries2)

    console.log(countries)
    console.log(countries2)
    console.log(countries3)
