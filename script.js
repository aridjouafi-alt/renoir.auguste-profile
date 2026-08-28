const thumbnails = document.querySelectorAll(".thumbnails img");

const mainPainting = document.querySelector(".main-painting img");

const paintingTitle = document.querySelector(".painting-title");
const paintingYear = document.querySelector(".painting-year");
const paintingDescription = document.querySelector(".painting-description");

const paintings = [
    {
        title: "Bal du moulin de la Galette",
        year: "1876",
        description: "Le tableau représente un après-midi animé au Moulin de la Galette, à Montmartre, à Paris, à la fin du XIXe siècle. Renoir capture l'atmosphère joyeuse d'un dimanche où les gens se réunissent pour danser, discuter et profiter de leur temps libre sous les arbres. À travers la lumière, les couleurs vives et les touches de pinceau fluides, il transmet le mouvement et l'énergie de la vie parisienne moderne. La scène invite le spectateur à partager un moment de bonheur, de convivialité et de plaisir parmi les habitants de la ville."
    },
    {
        title: "La Yole",
        year: "1875",
        description: "Le tableau montre deux jeunes femmes élégamment vêtues naviguant sur la Seine dans une petite barque orange vif. Renoir joue avec les reflets scintillants de l'eau, mêlant des touches de bleu, de vert et de blanc pour suggérer le mouvement des vagues. À l'arrière-plan, une maison bourgeoise et un pont ferroviaire témoignent de la vie moderne aux abords de Paris. La composition dégage une impression de légèreté, de loisir estival et de douceur de vivre au bord de l'eau."
    },
    {
        title: "Le Déjeuner des canotiers",
        year: "1880-1881",
        description: "Le tableau réunit un groupe d'amis de Renoir sur la terrasse d'un restaurant au bord de la Seine, à Chatou. La scène déborde de convivialité, avec des rameurs, des femmes élégantes et des verres de vin partagés sous un auvent rayé. Renoir excelle à rendre les textures variées, du tissu blanc de la nappe aux vêtements colorés des convives. Cette œuvre incarne l'esprit joyeux et social de la bourgeoisie parisienne pendant les loisirs dominicaux."
    },
    {
        title: "La Grenouillère",
        year: "1869",
        description: "Le tableau dépeint un lieu de baignade populaire sur la Seine, fréquenté par les Parisiens en quête de fraîcheur et de divertissement. Renoir capture la foule élégante rassemblée sur une petite île, entourée de barques colorées flottant sur l'eau scintillante. Les touches rapides et spontanées traduisent l'agitation joyeuse de cette scène estivale en plein essor de la vie moderne. Cette œuvre marque une étape clé dans le développement du style impressionniste naissant."
    },
    {
        title: "Portrait de Jeanne Samary",
        year: "1877",
        description: "Le tableau met en scène l'actrice Jeanne Samary, vêtue d'une robe bleu-vert, posant avec grâce contre un fond rose vibrant. Renoir capture son regard vif et son sourire léger, révélant la personnalité pétillante de la comédienne. Les touches de pinceau douces et fluides accentuent la fraîcheur de son teint et la texture soyeuse de sa peau. Ce portrait témoigne de l'amitié entre Renoir et les artistes de la scène parisienne de son époque."
    },
    {
        title: "Jeune fille se coiffant",
        year: "1894",
        description: "Le tableau représente une jeune fille de profil, peignant ses longs cheveux blonds avec attention et délicatesse. Renoir utilise une palette chaude de tons ocre et dorés pour illuminer la chevelure et la peau de la modèle. Le geste simple et intime évoque la tranquillité d'un moment quotidien, loin de toute agitation. Cette œuvre illustre la fascination tardive de Renoir pour la représentation sensuelle et lumineuse de la figure féminine."
    },
        {
        title: "Jeune fille au chapeau de paille",
        year: "1884",
        description: "Le tableau représente une jeune fille aux longs cheveux roux, coiffée d'un large chapeau de paille orangé aux bords souples. Renoir joue sur le contraste entre la chaleur du chapeau et de la chevelure et la douceur du fond flou aux tons bleutés et verts. Le regard calme et le léger geste de la main tenant une mèche de cheveux confèrent à la scène une grande intimité. Cette œuvre illustre la période où Renoir privilégiait des contours plus nets et une facture plus classique."
    },
    {
        title: "Enfant lisant (Jean Renoir)",
        year: "1895",
        description: "Le tableau montre un enfant absorbé dans la lecture d'un livre illustré, la tête penchée avec attention. Renoir capture la lumière douce qui caresse les joues rosées et les cheveux châtains de l'enfant, probablement son fils Jean. Les larges touches fluides du col blanc et de la veste bleue traduisent la simplicité et la tendresse du sujet. Cette œuvre témoigne de l'attachement de Renoir aux scènes intimes de la vie familiale et enfantine."
    }
];

thumbnails.forEach(function(thumbnail) {

    thumbnail.addEventListener("click", function() {

        thumbnails.forEach(function(thumbnail) {
            thumbnail.classList.remove("active");
        });

        thumbnail.classList.add("active");

mainPainting.style.opacity = "0";

setTimeout(function() {
    mainPainting.src = thumbnail.src;
    mainPainting.style.opacity = "1";
}, 150);
        const paintingNumber = Number(thumbnail.dataset.painting);
        const painting = paintings[paintingNumber - 1];
        paintingTitle.textContent = painting.title;
        paintingYear.textContent = painting.year;
        paintingDescription.textContent = painting.description;
        console.log(painting);

    });

});