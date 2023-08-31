function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const paragrafo = document.querySelector("p");


    if(valor=="gemeos"||valor=="gêmeos"){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
        paragrafo.innerHTML = "O CAVALEIRO DE OURO GÊMEOS - Saga é visto como um grande estrategista por ter conseguido se colocar no controle do Santuário (embora de maneira injusta) por 13 anos. Ele é frequentemente descrito por outros personagens como alguém com a bondade de um anjo, mas com a escuridão de um demônio. Essa ambivalência acabou criando uma dupla personalidade: um Saga bondoso que era extremamente leal a Atena e um maligno que teve controle do corpo por boa parte do tempo e matou o Grande Mestre anterior para tomar seu lugar. A criação de sua personalidade maligna foi influenciada pela Estrela do Infortúnio que adentrou em seu corpo e mente quando ainda era um bebê.";
    
    }

    else if(valor=="escorpiao"||valor=="escorpião"){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
        paragrafo.innerHTML = "O CAVALHEIRO DE OURO ESCORPIÃO - Milo é confiante e orgulhoso, e se importa muito com a honra e dignidade dos cavaleiros. Sempre seguro de si, é mais impassível do que a maioria dos outros Cavaleiros de Ouro. Ele tem uma natureza intensa e feroz, mas sempre preserva o próprio controle. É este mesmo controle que o torna um adversário formidável durante o combate. Milo nunca mostra dúvida e hesitação. Seus pensamentos e ações são harmonizadas perfeitamente. Esta sincronia é particularmente evidente durante o combate. O combate é um dos raros momentos em que todas as suas paixões muitas vezes deixam-se aparecer e agir quando a situação realmente exige. ";
    }
    
    else if(valor=="peixes"){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
        paragrafo.innerHTML = "O CAVALHEIRO DE OURO PEIXES - o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais. Sua ideia é de que só um poder supremo pode manter a paz e ordem no mundo, mesmo que esse poder provenha do mal. Afrodite é um cavaleiro orgulhoso que aprecia estética. Afrodite não é narcisista, pois tanto no mangá ou anime, sua beleza é retratada apenas por terceiros, ele nunca se exalta por possuí-la. Ele é um guerreiro nobre e justo a sua maneira.";
    }

    else if(valor=="aquario"||valor=="aquário"){
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","300px");
        paragrafo.innerHTML = "O CAVALHEIRO DE OURO AQUÁRIO - Camus é uma pessoa estoica, fria e distante, pois ele acredita que os Cavaleiros de Ouro, como os mais fortes entre os protetores de Atena, nunca devem mostrar exasperação ou medo, senão iriam levar as pessoas em desespero. Camus é conhecido como o mais frio dos doze cavaleiros de ouro, mas sua frieza não é baseada em suprimir seus sentimentos, e sim no controle.Camus é inflexível quando acredita em algo, mas sempre permanece calmo e calculista. Luta por aquilo que ele acha que é certo e está disposto a fazer qualquer coisa para defender seus ideais, como vimos na Saga de Hades, onde ele estava disposto a matar seus companheiros, se necessário, para cumprir a sua missão. ";
    }

    else if(valor=="capricornio"||valor=="capricórnio"){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
        paragrafo.innerHTML = "O CAVALHEIRO DE OURO CAPRICÓRNIO - Shura é um homem que impõe respeito e sempre está em uma posição de superioridade em relação as pessoas que o rodeiam, mantendo um grande orgulho e arrogância, além de se vangloriar que é o cavaleiro mais fiel a Atena; esta crença cega o levou a cometer vários erros ao longo de sua vida, e fica claro que ele só tomou consciência de seus atos na fase final de sua luta com Shiryu, quando se arrependeu.Seu golpe principal é Excalibur, no qual concentra seu cosmo numa rajada cortante de energia, como uma espada. Este golpe tem uma intensidade concentrada fortíssima, e sai na velocidade da luz.";
    }

    else if(valor=="sagitario"||valor=="sagitário"){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.png");
        imagem.setAttribute("width","300px");
        paragrafo.innerHTML = "SAGITÁRIO - Aiolos demonstra seriedade, como visto na série clássica, ele tem uma grande lealdade por Athena, sacrificando sua própria vida para à salvá-la. O cavaleiro possui um grande coração, desejando a justiça e que o mal seja exterminado, também viu isto vindo de Seiya, então confiou a armadura de Sagitário para o Pégasus. O defensor sempre tentou ensinar o que sabia para seus seguidores e assim se tornou um concorrente para mestre do santuário. Também tem uma aparência de Capitão, sempre cuidando das coisas com cautela, como visto em toda saga..";
    }

    else if(valor=="libra"){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
        paragrafo.innerHTML = "O CAVALHEIRO DE OURO LIBRA - sendo o Cavaleiro de Libra, Dohko possuía um grande senso de honra e justiça entre seus companheiros, nunca agindo por razões egoístas e tendo uma forte crença de que um verdadeiro Cavaleiro nunca deve deixar seu poder o torná-lo arrogante, pois só será verdadeiramente forte enquanto mantive-lo sob controle e usá-lo em prol de proteger aqueles que ama. No anime, Dohko acreditava tanto nisso em sua velhice que chegou a declarar que se um guerreiro de Atena não conseguisse compreender isso, inevitavelmente seria superado.";
    }

    else if(valor=="aries"||valor=="áries"){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
        paragrafo.innerHTML = "O CAVALHEIRO DE OURO ÁRIES - Mu é o mais tranquilo e pacífico dos Cavaleiros de Ouro. No entanto, é um dos mais poderosos. Só recorre a violência em situações extremas.[2] As palavras são as suas armas na maioria dos casos. Apesar da sua aparência jovem, Mu mostra maturidade e grande sabedoria.[3] Ele aprecia uma vida tranquila e isolada, exemplicada pela ponte que leva à sua casa em Jamiel, que poucos podem passar e muitos faleceram tentando. Mu tem um vasto conhecimento na antiga arte de restaurar as Armaduras dos Cavaleiros atenienses. Normalmente mostra frieza e distanciamento para aqueles que conseguem chegar a sua torre em Jamiel onde residia.Uma de suas características mais notáveis são a sua lealdade e sentido de justiça.";
    }

    else if(valor=="touro"){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
        paragrafo.innerHTML = "O CAVALHEIRO DE OURO TOURO - Apesar de sua aparência intimidante, Aldebaran é humilde, amigável, leal e honrado entre seus companheiros da ordem e muito estrito em seguir os regulamentos e leis do Santuário. O Touro Dourado, tem uma personalidade franca e despachada, confia no que sente, sem se preocupar com as aparências ou racionalidades. Parece gostar muito de crianças também, seu senso de honra é algo a se destacar, já que em sua luta contra Seiya, ao conseguir separar o chifre do elmo de sua armadura, ele o deixa passar aceitando sua derrota. Ele prefere não restaurar o dito chifre como prova de que ele também é uma pessoa que sabe aceitar sua derrota com o cavalheirismo.";
    }

    else if(valor=="cancer"||valor=="câncer"){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
        paragrafo.innerHTML = "O CAVALHEIRO DE OURO CÂNCER - Máscara da Morte é um homem extremamente violento, sanguinário, forte, sádico, adora lutas, matanças e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis, ou seja os fins justificam os meios, essas características combinam com a imagem que ele tem sobre a justiça. É um homem firme em suas crenças (ainda que errôneas), acreditando que a força é a justiça, seguiu o Grande Mestre mesmo sabendo da sua identidade, pois em sua opinião a força modifica a justiça que por sua vez determina o rumo da história, desta maneira para ele o injusto pode se tornar justo, tudo depende de como tudo terminará.";
    }

    else if(valor=="leao"||valor=="leão"){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
        paragrafo.innerHTML = "O CAVALHEIRO DE OURO LEÃO - Aiolia é um dos mais nobres e valentes cavaleiros, sempre disposto a lutar pela justiça. Devido à acusação de traidor recaída sobre o irmão, Aiolia devotou a vida para limpar a honra. Possui um caráter sereno e grandioso. Quando Seiya pretendia abandonar o treinamento, devido a não suportar mais o preconceito que sofria por ser oriental, Aiolia o motiva a ficar dizendo que a origem nunca impediu ninguém de ser Cavaleiro.[2] No entanto, Aiolia pode se tornar impetuoso, como ao enfrentar os Espectros que tentavam atravessar sua casa zodiacal, ou quando combateu os Cavaleiros Renegados, na Saga de Hades.";
    }

    else if(valor=="virgem"){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
        paragrafo.innerHTML = "O CAVALHEIRO DE OURO VIRGEM - Shaka é um homem que possui grande poder, sabedoria e conhecimento, o que o fazem ser admirado e respeitado por seus companheiros. Aparentemente, não demonstra piedade nenhuma por inimigos que ele julga como mais fracos, e despreza aqueles que não possuem bons modos ao entrarem na Casa de Virgem.Shaka sempre busca lutar em nome da justiça, e acreditava nos ideais do Grande Mestre, porém, não chegou a perceber que ele era, na verdade, Saga, que usurpou o posto de Grande Mestre, isto porque Shaka detém de um dom que lhe permite enxergar a essência das pessoas e a essência que Shaka enxergava no Grande Mestre era a bondade, que era comparada a de Deus, que acabava mascarando a essência maligna, que era comparada a um demônio.";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... 😖😖";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}