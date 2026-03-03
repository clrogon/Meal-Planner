// Ementa Dezembro - Familia Goncalves
export const MONTH_NAME = "Dezembro"
export const MONTH_INDEX = 12
export const WEEKS = [
  { id: 1, days: [
    {
      day: "Segunda-Feira", short: "Seg",
      snack:  { adults: "Croissant c/ Fiambre + Leite", child: "Croissant c/ Fiambre + Leite" },
      soup:   { adults: "Caldo Verde", child: "Caldo Verde" },
      lunch:  { adults: "Grao com Mao de Vaca c/ Arroz Branco", child: "Grao com Cenoura e Arroz (sem mao de vaca)", cal_adults: "~560 kcal", cal_child: "~350 kcal", note: "Colagenio + Ferro + Fibra alta" },
      dinner: { adults: "Jerk Turkey Smashed Plantain Burgers", child: "Peru assado em tiras com Banana-da-Terra", cal_adults: "~390 kcal", cal_child: "~310 kcal", note: "Potassio + Proteina magra" }
    },
    {
      day: "Terça-Feira", short: "Ter",
      snack:  { adults: "Iogurte + Cereais", child: "Iogurte + Cereais" },
      soup:   { adults: "Sopa de Lentilhas", child: "Sopa de Lentilhas" },
      lunch:  { adults: "Muamba de Ginguba com Frango e Legumes", child: "Frango com molho de amendoim suave e Arroz", cal_adults: "~520 kcal", cal_child: "~380 kcal", note: "Proteina + Gorduras boas + Vitaminas" },
      dinner: { adults: "Tacos com Ovo e Feijao", child: "Tacos simples com ovo e feijao", cal_adults: "~340 kcal", cal_child: "~270 kcal", note: "Proteina + Fibra + Ferro" }
    },
    {
      day: "Quarta-Feira", short: "Qua",
      snack:  { adults: "Fruta + Pipocas", child: "Fruta + Pipocas sem sal" },
      soup:   { adults: "Sopa de Grao", child: "Sopa de Grao" },
      lunch:  { adults: "Peixe Grelhado com Arroz Pilaf de Espinafres e Camaroes com Manteiga e Limao", child: "Peixe Grelhado com Arroz de Espinafres e Camaroes", cal_adults: "~490 kcal", cal_child: "~360 kcal", note: "Omega-3 + Ferro + Vitamina K + Vitamina C" },
      dinner: { adults: "Queijo Crocante com Pate de Ovo", child: "Queijo tostado com Ovo mexido", cal_adults: "~290 kcal", cal_child: "~240 kcal", note: "Calcio + Proteina + Vitamina D" }
    },
    {
      day: "Quinta-Feira", short: "Qui",
      snack:  { adults: "Batido de Fruta + Bolachas", child: "Batido de Fruta + Bolachas" },
      soup:   { adults: "Sopa de Legumes", child: "Sopa de Legumes" },
      lunch:  { adults: "Rosbife com Pure ou Batatas Assadas e Cenoura Assada", child: "Rosbife fatiado fino com Pure e Cenoura Assada", cal_adults: "~540 kcal", cal_child: "~390 kcal", note: "Ferro + Zinco + Beta-caroteno" },
      dinner: { adults: "Garlic Parmesan Fries Burger Bowl", child: "Mini burger bowl com batata assada e salada", cal_adults: "~420 kcal", cal_child: "~320 kcal", note: "Proteina + Calcio" }
    },
    {
      day: "Sexta-Feira", short: "Sex",
      snack:  { adults: "Pipocas + Fruta", child: "Pipocas sem sal + Fruta" },
      soup:   { adults: "Sopa de Feijao", child: "Sopa de Feijao" },
      lunch:  { adults: "Calulu de Peixe Fresco e Seco c/ Feijao de Oleo de Palma e Kizaca", child: "Douradinhos com Arroz de Cenoura", cal_adults: "~510 kcal", cal_child: "~370 kcal", note: "Prato tradicional + Omega-3 + Ferro" },
      dinner: { adults: "Ovos Mexidos com Legumes", child: "Ovos mexidos com legumes suaves", cal_adults: "~250 kcal", cal_child: "~210 kcal", note: "Proteina + Vitaminas + Leve" }
    },
    {
      day: "Sábado", short: "Sáb",
      snack:  { adults: "—", child: "—" },
      soup:   { adults: "—", child: "—" },
      lunch:  { adults: "Bacalhau a Mediterraneo com Batata-Doce e Feijao Verde Salteado", child: "Bacalhau cozido com Batata-Doce e Feijao Verde", cal_adults: "~460 kcal", cal_child: "~330 kcal", note: "Proteina alta + Fibra + Vitamina B12" },
      dinner: { adults: "Croquetes de Frango", child: "Croquetes de Frango assados", cal_adults: "~310 kcal", cal_child: "~240 kcal", note: "Proteina magra + Calcio" }
    },
    {
      day: "Domingo", short: "Dom",
      snack:  { adults: "—", child: "—" },
      soup:   { adults: "—", child: "—" },
      lunch:  { adults: "Caldeirada de Peixe com Batata e Legumes", child: "Caldeirada de Peixe suave com Batata e Legumes", cal_adults: "~440 kcal", cal_child: "~320 kcal", note: "Omega-3 + Vitamina C + Potassio" },
      dinner: { adults: "—", child: "—", cal_adults: "—", cal_child: "—", note: "Refeicao livre ou leve" }
    }
  ]},
  { id: 2, days: [
    {
      day: "Segunda-Feira", short: "Seg",
      snack:  { adults: "Bolo ou Panquecas + Ice Tea", child: "Bolo ou Panquecas + Iogurte" },
      soup:   { adults: "Creme de Batata-Doce", child: "Creme de Batata-Doce" },
      lunch:  { adults: "Hamburguer de Novilho c/ Ovo, Arroz Branco e Salada Verde", child: "Mini Hamburguer caseiro c/ Ovo estrelado e Arroz", cal_adults: "~580 kcal", cal_child: "~420 kcal", note: "Proteina completa + Ferro heme + Omega-3" },
      dinner: { adults: "Pao com Ovo na Frigideira", child: "Pao com Ovo estrelado", cal_adults: "~280 kcal", cal_child: "~230 kcal", note: "Proteina + Hidratos" }
    },
    {
      day: "Terça-Feira", short: "Ter",
      snack:  { adults: "Pao c/ Manteiga e Fiambre + Fruta", child: "Pao c/ Manteiga e Fiambre + Fruta" },
      soup:   { adults: "Caldo de Peixe", child: "Caldo de Peixe" },
      lunch:  { adults: "Grelhada Mista com Farofa e Vinagrete de Maca Verde", child: "Espetada de Frango Grelhada com Arroz e Salada", cal_adults: "~600 kcal", cal_child: "~380 kcal", note: "Proteina alta + Ferro + Vitamina C" },
      dinner: { adults: "Wrap de Frango com Vegetais", child: "Wrap de Frango simples com legumes", cal_adults: "~340 kcal", cal_child: "~270 kcal", note: "Proteina + Fibra + Vitaminas" }
    },
    {
      day: "Quarta-Feira", short: "Qua",
      snack:  { adults: "Tosta c/ Abacate + Sumo", child: "Tosta c/ Queijo + Sumo natural" },
      soup:   { adults: "Creme de Courgette", child: "Creme de Courgette" },
      lunch:  { adults: "Wrap de Frango com Abacate, Tomate e Alface", child: "Wrap de Frango com Queijo e Legumes", cal_adults: "~460 kcal", cal_child: "~340 kcal", note: "Proteina + Gorduras saudaveis + Fibra" },
      dinner: { adults: "Sandes variada", child: "Sandes simples com fiambre e queijo", cal_adults: "~280 kcal", cal_child: "~220 kcal", note: "Calcio + Hidratos moderados" }
    },
    {
      day: "Quinta-Feira", short: "Qui",
      snack:  { adults: "Pao c/ Queijo + Fruta", child: "Pao c/ Queijo + Fruta" },
      soup:   { adults: "Canja com Miudos", child: "Canja com Miudos (sem piri-piri)" },
      lunch:  { adults: "Espetadas de Peixe e Camarao com Ananas, Batata-Doce Assada e Legumes no Forno", child: "Espetada de Peixe no forno com Batata-Doce e Legumes", cal_adults: "~470 kcal", cal_child: "~340 kcal", note: "Omega-3 + Vitamina C + Beta-caroteno" },
      dinner: { adults: "Tortilla de Platano Maduro alta em Proteina", child: "Omelete simples com Banana-da-Terra", cal_adults: "~310 kcal", cal_child: "~260 kcal", note: "Potassio + Proteina vegetal" }
    },
    {
      day: "Sexta-Feira", short: "Sex",
      snack:  { adults: "Croissant c/ Manteiga + Sumo", child: "Croissant c/ Manteiga + Sumo natural" },
      soup:   { adults: "Sopa de Espinafres", child: "Sopa de Espinafres" },
      lunch:  { adults: "Bife Sirloin na Brasa com Molho de Cogumelos, Batata Assada e Broculos", child: "Bife Grelhado com Batata assada e Broculos cozidos", cal_adults: "~560 kcal", cal_child: "~400 kcal", note: "Ferro + Vitamina C + Antioxidantes" },
      dinner: { adults: "Sopa / Restos", child: "Sopa / Restos", cal_adults: "~200 kcal", cal_child: "~180 kcal", note: "Refeicao leve noturna + Hidratacao" }
    },
    {
      day: "Sábado", short: "Sáb",
      snack:  { adults: "—", child: "—" },
      soup:   { adults: "—", child: "—" },
      lunch:  { adults: "Mufete com Cacusso, Canjica e Kizaca", child: "Cacusso cozido com Feijao de Banha e Canjica", cal_adults: "~520 kcal", cal_child: "~380 kcal", note: "Prato tradicional angolano + Rica em fibra" },
      dinner: { adults: "Jerk Turkey Smashed Plantain Burgers", child: "Peru assado em tiras com Banana-da-Terra", cal_adults: "~390 kcal", cal_child: "~310 kcal", note: "Potassio + Proteina magra" }
    },
    {
      day: "Domingo", short: "Dom",
      snack:  { adults: "—", child: "—" },
      soup:   { adults: "—", child: "—" },
      lunch:  { adults: "Moamba de Galinha com Arroz e Ginguba", child: "Frango estufado com Arroz e Cenoura (versao suave)", cal_adults: "~540 kcal", cal_child: "~390 kcal", note: "Proteina + Ferro + Vitaminas B" },
      dinner: { adults: "—", child: "—", cal_adults: "—", cal_child: "—", note: "Refeicao livre ou leve" }
    }
  ]},
  { id: 3, days: [
    {
      day: "Segunda-Feira", short: "Seg",
      snack:  { adults: "Bolo ou Panquecas + Iogurte", child: "Bolo ou Panquecas + Iogurte" },
      soup:   { adults: "Sopa de Tomate", child: "Sopa de Tomate" },
      lunch:  { adults: "Espada Grelhada com Molho de Citrinos, Mandioca ao Molho e Feijao Verde", child: "Peixe Espada Grelhado com Mandioca cozida e Feijao Verde", cal_adults: "~450 kcal", cal_child: "~340 kcal", note: "Vitamina C + Omega-3 + Fibra" },
      dinner: { adults: "Sopa de Legumes", child: "Sopa de Legumes", cal_adults: "~190 kcal", cal_child: "~170 kcal", note: "Refeicao leve" }
    },
    {
      day: "Terça-Feira", short: "Ter",
      snack:  { adults: "Fruta + Iogurte Natural", child: "Fruta + Iogurte Natural" },
      soup:   { adults: "Creme de Ervilhas", child: "Creme de Ervilhas" },
      lunch:  { adults: "Atum Grelhado com Salada de Manga e Arroz Integral", child: "Atum Grelhado com Arroz e Salada de Cenoura", cal_adults: "~460 kcal", cal_child: "~330 kcal", note: "Omega-3 + Vitamina C + Fibra" },
      dinner: { adults: "Wings de Frango", child: "Wings de Frango assadas (sem molho picante)", cal_adults: "~380 kcal", cal_child: "~280 kcal", note: "Proteina + Colagenio" }
    },
    {
      day: "Quarta-Feira", short: "Qua",
      snack:  { adults: "4 Bolachas + Fruta", child: "4 Bolachas + Fruta" },
      soup:   { adults: "Caldo de Galinha", child: "Caldo de Galinha" },
      lunch:  { adults: "Pilaf de Frango com Bulgur e Grao-de-Bico e Salada Verde", child: "Frango com Bulgur e Grao-de-Bico (porcao menor)", cal_adults: "~500 kcal", cal_child: "~360 kcal", note: "Proteina completa + Fibra + Ferro" },
      dinner: { adults: "Resto do Almoco", child: "Resto do Almoco", cal_adults: "~280 kcal", cal_child: "~220 kcal", note: "Zero desperdicio" }
    },
    {
      day: "Quinta-Feira", short: "Qui",
      snack:  { adults: "Iogurte + 4 Bolachas", child: "Iogurte + 4 Bolachas" },
      soup:   { adults: "Creme de Cenoura e Gengibre", child: "Creme de Cenoura (sem gengibre)" },
      lunch:  { adults: "Galinhada com Salada", child: "Galinhada (porcao menor) com Arroz e Salada", cal_adults: "~520 kcal", cal_child: "~360 kcal", note: "Proteina + Ferro + Vitaminas B" },
      dinner: { adults: "Fish Finger Sandwich", child: "Sandes de Peixe panado com alface", cal_adults: "~310 kcal", cal_child: "~250 kcal", note: "Omega-3 + Proteina" }
    },
    {
      day: "Sexta-Feira", short: "Sex",
      snack:  { adults: "Pao de Forma c/ Manteiga de Amendoim", child: "Pao c/ Manteiga + Banana" },
      soup:   { adults: "Creme de Abobora", child: "Creme de Abobora" },
      lunch:  { adults: "Filetes de Peixe Panado com Arroz de Gengibre e Salada de Repolho c/ Ananas", child: "Filetes de Peixe no forno com Arroz e Cenoura", cal_adults: "~500 kcal", cal_child: "~360 kcal", note: "Omega-3 + Anti-inflamatorio + Vitamina C" },
      dinner: { adults: "Banh Mi", child: "Sandes com Frango e Legumes", cal_adults: "~390 kcal", cal_child: "~290 kcal", note: "Proteina + Fibra + Probioticos" }
    },
    {
      day: "Sábado", short: "Sáb",
      snack:  { adults: "—", child: "—" },
      soup:   { adults: "—", child: "—" },
      lunch:  { adults: "Costeletas Grelhadas com Arroz com Feijao Malandro e Salada Verde", child: "Costeleta Grelhada com Arroz e Feijao", cal_adults: "~540 kcal", cal_child: "~400 kcal", note: "Ferro + Zinco + Fibra" },
      dinner: { adults: "Pao com Ovo na Frigideira", child: "Pao com Ovo estrelado", cal_adults: "~280 kcal", cal_child: "~230 kcal", note: "Proteina + Hidratos" }
    },
    {
      day: "Domingo", short: "Dom",
      snack:  { adults: "—", child: "—" },
      soup:   { adults: "—", child: "—" },
      lunch:  { adults: "Espetadas de Frango com Legumes Grelhados e Arroz de Ervas", child: "Espetadas de Frango com Arroz e Legumes no forno", cal_adults: "~490 kcal", cal_child: "~350 kcal", note: "Proteina magra + Vitamina C + Fibra" },
      dinner: { adults: "—", child: "—", cal_adults: "—", cal_child: "—", note: "Refeicao livre ou leve" }
    }
  ]},
  { id: 4, days: [
    {
      day: "Segunda-Feira", short: "Seg",
      snack:  { adults: "Croissant c/ Fiambre + Leite", child: "Croissant c/ Fiambre + Leite" },
      soup:   { adults: "Caldo Verde", child: "Caldo Verde" },
      lunch:  { adults: "Grao com Mao de Vaca c/ Arroz Branco", child: "Grao com Cenoura e Arroz (sem mao de vaca)", cal_adults: "~560 kcal", cal_child: "~350 kcal", note: "Colagenio + Ferro + Fibra alta" },
      dinner: { adults: "Chicken Doner Wraps", child: "Wrap de Frango simples com legumes", cal_adults: "~400 kcal", cal_child: "~300 kcal", note: "Proteina + Fibra + Vitaminas" }
    },
    {
      day: "Terça-Feira", short: "Ter",
      snack:  { adults: "Iogurte + Cereais", child: "Iogurte + Cereais" },
      soup:   { adults: "Sopa de Lentilhas", child: "Sopa de Lentilhas" },
      lunch:  { adults: "Muamba de Ginguba com Frango e Legumes", child: "Frango com molho de amendoim suave e Arroz", cal_adults: "~520 kcal", cal_child: "~380 kcal", note: "Proteina + Gorduras boas + Vitaminas" },
      dinner: { adults: "Tapioca com Pate de Frango", child: "Tapioca com Frango desfiado e queijo", cal_adults: "~300 kcal", cal_child: "~250 kcal", note: "Hidratos sem gluten + Proteina magra" }
    },
    {
      day: "Quarta-Feira", short: "Qua",
      snack:  { adults: "Fruta + Pipocas", child: "Fruta + Pipocas sem sal" },
      soup:   { adults: "Sopa de Grao", child: "Sopa de Grao" },
      lunch:  { adults: "Peixe Grelhado com Arroz Pilaf de Espinafres e Camaroes com Manteiga e Limao", child: "Peixe Grelhado com Arroz de Espinafres e Camaroes", cal_adults: "~490 kcal", cal_child: "~360 kcal", note: "Omega-3 + Ferro + Vitamina K + Vitamina C" },
      dinner: { adults: "Sandes de Atum e Ovo", child: "Sandes de Atum com ovo cozido", cal_adults: "~290 kcal", cal_child: "~240 kcal", note: "Omega-3 + Proteina + Calcio" }
    },
    {
      day: "Quinta-Feira", short: "Qui",
      snack:  { adults: "Batido de Fruta + Bolachas", child: "Batido de Fruta + Bolachas" },
      soup:   { adults: "Sopa de Legumes", child: "Sopa de Legumes" },
      lunch:  { adults: "Rosbife com Pure ou Batatas Assadas e Cenoura Assada", child: "Rosbife fatiado fino com Pure e Cenoura Assada", cal_adults: "~540 kcal", cal_child: "~390 kcal", note: "Ferro + Zinco + Beta-caroteno" },
      dinner: { adults: "Misto de Omelete", child: "Omelete simples com queijo", cal_adults: "~280 kcal", cal_child: "~230 kcal", note: "Proteina + Calcio + Leveza noturna" }
    },
    {
      day: "Sexta-Feira", short: "Sex",
      snack:  { adults: "Pipocas + Fruta", child: "Pipocas sem sal + Fruta" },
      soup:   { adults: "Sopa de Feijao", child: "Sopa de Feijao" },
      lunch:  { adults: "Calulu de Peixe Fresco e Seco c/ Feijao de Oleo de Palma e Kizaca", child: "Douradinhos com Arroz de Cenoura", cal_adults: "~510 kcal", cal_child: "~370 kcal", note: "Prato tradicional + Omega-3 + Ferro" },
      dinner: { adults: "Ramp e Cheddar Biscuits", child: "Paozinho c/ queijo derretido", cal_adults: "~290 kcal", cal_child: "~220 kcal", note: "Calcio + Hidratos moderados" }
    },
    {
      day: "Sábado", short: "Sáb",
      snack:  { adults: "—", child: "—" },
      soup:   { adults: "—", child: "—" },
      lunch:  { adults: "Bacalhau a Mediterraneo com Batata-Doce e Feijao Verde Salteado", child: "Bacalhau cozido com Batata-Doce e Feijao Verde", cal_adults: "~460 kcal", cal_child: "~330 kcal", note: "Proteina alta + Fibra + Vitamina B12" },
      dinner: { adults: "Sopa de Legumes", child: "Sopa de Legumes", cal_adults: "~190 kcal", cal_child: "~170 kcal", note: "Refeicao leve" }
    },
    {
      day: "Domingo", short: "Dom",
      snack:  { adults: "—", child: "—" },
      soup:   { adults: "—", child: "—" },
      lunch:  { adults: "Caldeirada de Peixe com Batata e Legumes", child: "Caldeirada de Peixe suave com Batata e Legumes", cal_adults: "~440 kcal", cal_child: "~320 kcal", note: "Omega-3 + Vitamina C + Potassio" },
      dinner: { adults: "—", child: "—", cal_adults: "—", cal_child: "—", note: "Refeicao livre ou leve" }
    }
  ]}
]