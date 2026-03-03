// Ementa Janeiro 2026 – Família Gonçalves
// Adultos: Mavita (Mãe), Cláudio (Pai)
// Criança: Nayane (8 anos)

export const WEEKS = [
  {
    id: 1,
    days: [
      {
        day: "Segunda-Feira", short: "Seg",
        snack: { adults: "Bolo ou Panquecas + Iogurte", child: "Bolo ou Panquecas + Iogurte" },
        soup:  { adults: "Canja com Miúdos", child: "Canja com Miúdos (sem piri-piri)" },
        lunch: {
          adults: "Choco Grelhado, Camarão e Ananás, Batata Doce Assada e Salada de Pimentos",
          child:  "Camarão e Ananás com Batata Doce Assada e Legumes Cozidos",
          cal_adults: "~480 kcal", cal_child: "~350 kcal",
          note: "Ómega-3 ✦ Vitamina C ✦ Beta-caroteno"
        },
        dinner: {
          adults: "Sardinhas no Pão com Pimento Vermelho Assado",
          child:  "Sardinhas no Pão com queijo (sem pimento picante)",
          cal_adults: "~320 kcal", cal_child: "~280 kcal",
          note: "Cálcio ✦ Ómega-3 ✦ Ferro"
        }
      },
      {
        day: "Terça-Feira", short: "Ter",
        snack: { adults: "Pão c/ Manteiga e Fiambre + Fruta", child: "Pão c/ Manteiga e Fiambre + Fruta" },
        soup:  { adults: "Canja com Miúdos", child: "Canja com Miúdos" },
        lunch: {
          adults: "Frango Pipoca Glaceado com Soja e Arroz Chinês com Gengibre / Salada de Cenoura Ralada",
          child:  "Frango no Forno com Arroz e Cenoura Ralada (versão sem fritura)",
          cal_adults: "~520 kcal", cal_child: "~380 kcal",
          note: "Proteína magra ✦ Anti-inflamatório (gengibre)"
        },
        dinner: {
          adults: "Ramp & Cheddar Biscuits",
          child:  "Pãozinho c/ queijo derretido",
          cal_adults: "~290 kcal", cal_child: "~220 kcal",
          note: "Cálcio ✦ Hidratos moderados"
        }
      },
      {
        day: "Quarta-Feira", short: "Qua",
        snack: { adults: "Fruta + Pipocas", child: "Fruta + Pipocas sem sal" },
        soup:  { adults: "Sopa de Feijão", child: "Sopa de Feijão" },
        lunch: {
          adults: "Bacalhau à Mediterrâneo com Batata-Doce e Feijão Verde Salteado",
          child:  "Bacalhau cozido com Batata-Doce e Feijão Verde (menos azeite)",
          cal_adults: "~460 kcal", cal_child: "~330 kcal",
          note: "Proteína alta ✦ Fibra ✦ Vitamina B12"
        },
        dinner: {
          adults: "Sopa / Restos", child: "Sopa / Restos",
          cal_adults: "~200 kcal", cal_child: "~180 kcal",
          note: "Refeição leve noturna ✦ Hidratação"
        }
      },
      {
        day: "Quinta-Feira", short: "Qui",
        snack: { adults: "Iogurte + 4 Bolachas", child: "Iogurte + 4 Bolachas" },
        soup:  { adults: "Sopa de Feijão", child: "Sopa de Feijão" },
        lunch: {
          adults: "Costeletas Grelhadas com Arroz com Feijão Malandro + Salada Verde",
          child:  "Costeleta Grelhada (sem gordura extra) com Arroz e Feijão",
          cal_adults: "~540 kcal", cal_child: "~400 kcal",
          note: "Ferro ✦ Zinco ✦ Fibra"
        },
        dinner: {
          adults: "Sopa / Restos", child: "Sopa / Restos",
          cal_adults: "~200 kcal", cal_child: "~180 kcal",
          note: "Refeição leve noturna"
        }
      },
      {
        day: "Sexta-Feira", short: "Sex",
        snack: { adults: "Croissant c/ Manteiga + Sumo", child: "Croissant c/ Manteiga + Sumo natural" },
        soup:  { adults: "Sopa de Feijão", child: "Sopa de Feijão" },
        lunch: {
          adults: "Hambúrguer ou Bife de Novilho c/ Ovo, Cavala, Arroz Branco (Loco Moco)",
          child:  "Mini Hambúrguer caseiro c/ Ovo estrelado e Arroz",
          cal_adults: "~580 kcal", cal_child: "~420 kcal",
          note: "Proteína completa ✦ Ferro heme ✦ Ómega-3"
        },
        dinner: {
          adults: "Jerk Turkey Smashed Plantain Burgers",
          child:  "Banana-da-Terra frita + Peru assado em tiras",
          cal_adults: "~390 kcal", cal_child: "~310 kcal",
          note: "Potássio ✦ Proteína magra"
        }
      },
      {
        day: "Sábado", short: "Sáb",
        snack: { adults: "—", child: "—" },
        soup:  { adults: "—", child: "—" },
        lunch: {
          adults: "Mufete com Cacusso, Canjica e Kizaca",
          child:  "Cacusso cozido com Feijão de Banha e Canjica",
          cal_adults: "~520 kcal", cal_child: "~380 kcal",
          note: "Prato tradicional angolano ✦ Rica em fibra"
        },
        dinner: {
          adults: "Wings de Frango",
          child:  "Wings de Frango assadas (sem molho picante)",
          cal_adults: "~380 kcal", cal_child: "~280 kcal",
          note: "Proteína ✦ Colagénio"
        }
      },
      {
        day: "Domingo", short: "Dom",
        snack: { adults: "—", child: "—" },
        soup:  { adults: "—", child: "—" },
        lunch: {
          adults: "Grão com Mão de Vaca c/ Arroz Branco",
          child:  "Grão com Cenoura e Arroz (sem mão de vaca)",
          cal_adults: "~560 kcal", cal_child: "~350 kcal",
          note: "Colagénio ✦ Ferro ✦ Fibra alta"
        },
        dinner: {
          adults: "—", child: "—",
          cal_adults: "—", cal_child: "—",
          note: "Refeição livre ou leve"
        }
      }
    ]
  },
  {
    id: 2,
    days: [
      {
        day: "Segunda-Feira", short: "Seg",
        snack: { adults: "Bolo ou Panquecas + Ice Tea", child: "Bolo ou Panquecas + Iogurte" },
        soup:  { adults: "Canja com Miúdos", child: "Canja com Miúdos" },
        lunch: {
          adults: "Espada Grelhada com Molho de Citrinos, Mandioca ao Molho e Feijão Verde",
          child:  "Peixe Espada Grelhado com Mandioca cozida e Feijão Verde",
          cal_adults: "~450 kcal", cal_child: "~340 kcal",
          note: "Vitamina C ✦ Ómega-3 ✦ Fibra"
        },
        dinner: {
          adults: "Tortilla de Plátano Maduro alta em Proteína",
          child:  "Omelete simples com Banana-da-Terra",
          cal_adults: "~310 kcal", cal_child: "~260 kcal",
          note: "Potássio ✦ Proteína vegetal"
        }
      },
      {
        day: "Terça-Feira", short: "Ter",
        snack: { adults: "Pão c/ Manteiga + Fruta", child: "Pão c/ Manteiga + Fruta" },
        soup:  { adults: "Canja com Miúdos", child: "Canja com Miúdos" },
        lunch: {
          adults: "Churrasco com Arroz Branco e Feijão Corda + Salada Verde e Cenoura",
          child:  "Carne Grelhada com Arroz e Feijão Corda",
          cal_adults: "~530 kcal", cal_child: "~390 kcal",
          note: "Ferro ✦ Vitamina A ✦ Fibra"
        },
        dinner: {
          adults: "Misto de Omelete",
          child:  "Omelete simples com queijo",
          cal_adults: "~280 kcal", cal_child: "~230 kcal",
          note: "Proteína ✦ Cálcio ✦ Leveza noturna"
        }
      },
      {
        day: "Quarta-Feira", short: "Qua",
        snack: { adults: "Iogurte + Cereais", child: "Iogurte + Cereais" },
        soup:  { adults: "Caldo Verde", child: "Caldo Verde" },
        lunch: {
          adults: "Peixe Grelhado com Salada de Couscous e Ervilhas",
          child:  "Peixe Grelhado com Couscous e Ervilhas (porção menor)",
          cal_adults: "~470 kcal", cal_child: "~340 kcal",
          note: "Proteína ✦ Ferro ✦ Vitamina K"
        },
        dinner: {
          adults: "Sopa / Restos", child: "Sopa / Restos",
          cal_adults: "~200 kcal", cal_child: "~180 kcal",
          note: "Refeição leve"
        }
      },
      {
        day: "Quinta-Feira", short: "Qui",
        snack: { adults: "Croissant c/ Fiambre + Leite", child: "Croissant c/ Fiambre + Leite" },
        soup:  { adults: "Caldo Verde", child: "Caldo Verde" },
        lunch: {
          adults: "Bife Sirloin na Brasa com Molho de Cogumelos, Batata Assada e Brócolos Salteados",
          child:  "Bife Grelhado com Batata assada e Brócolos cozidos",
          cal_adults: "~560 kcal", cal_child: "~400 kcal",
          note: "Ferro ✦ Vitamina C ✦ Antioxidantes"
        },
        dinner: {
          adults: "Sopa / Restos", child: "Sopa / Restos",
          cal_adults: "~200 kcal", cal_child: "~180 kcal",
          note: "Refeição leve"
        }
      },
      {
        day: "Sexta-Feira", short: "Sex",
        snack: { adults: "Pipocas + Fruta", child: "Pipocas sem sal + Fruta" },
        soup:  { adults: "Caldo Verde", child: "Caldo Verde" },
        lunch: {
          adults: "Filetes de Peixe Panado com Arroz de Gengibre e Salada de Repolho c/ Ananás",
          child:  "Filetes de Peixe no forno com Arroz e Cenoura",
          cal_adults: "~500 kcal", cal_child: "~360 kcal",
          note: "Ómega-3 ✦ Anti-inflamatório ✦ Vitamina C"
        },
        dinner: {
          adults: "Sopa / Restos", child: "Sopa / Restos",
          cal_adults: "~200 kcal", cal_child: "~180 kcal",
          note: "Refeição leve"
        }
      },
      {
        day: "Sábado", short: "Sáb",
        snack: { adults: "—", child: "—" },
        soup:  { adults: "—", child: "—" },
        lunch: {
          adults: "Funge de Peito Alto com Dobrada e Folhas Verdes / Mexican Beef Rice Skillet",
          child:  "Massada de Peixe com Legumes",
          cal_adults: "~540 kcal", cal_child: "~370 kcal",
          note: "Colagénio ✦ Ferro ✦ Vitaminas B"
        },
        dinner: {
          adults: "Garlic Parmesan Fries Burger Bowl",
          child:  "Mini burger bowl com batata assada e salada",
          cal_adults: "~420 kcal", cal_child: "~320 kcal",
          note: "Proteína ✦ Cálcio"
        }
      },
      {
        day: "Domingo", short: "Dom",
        snack: { adults: "—", child: "—" },
        soup:  { adults: "—", child: "—" },
        lunch: {
          adults: "Grelhada Mista (Lagartos, Espetadas, Linguiça, Entremeada) com Farofa e Vinagrete de Maçã Verde",
          child:  "Espetada de Frango Grelhada com Arroz e Salada",
          cal_adults: "~600 kcal", cal_child: "~380 kcal",
          note: "Proteína alta ✦ Ferro ✦ Vitamina C"
        },
        dinner: {
          adults: "—", child: "—",
          cal_adults: "—", cal_child: "—",
          note: "Refeição livre ou leve"
        }
      }
    ]
  },
  {
    id: 3,
    days: [
      {
        day: "Segunda-Feira", short: "Seg",
        snack: { adults: "Bolo ou Panquecas + Iogurte", child: "Bolo ou Panquecas + Iogurte" },
        soup:  { adults: "Creme de Ervilhas", child: "Creme de Ervilhas" },
        lunch: {
          adults: "Corvininhas na Brasa com Molho Verde, Batata Doce Cozida e Ervas Refogadas + Legumes Salteados",
          child:  "Peixe Grelhado com Batata Doce e Legumes Salteados",
          cal_adults: "~460 kcal", cal_child: "~340 kcal",
          note: "Ómega-3 ✦ Beta-caroteno ✦ Vitamina A"
        },
        dinner: {
          adults: "Nutritionist's Breakfast Tacos",
          child:  "Tacos simples com ovo e feijão",
          cal_adults: "~340 kcal", cal_child: "~270 kcal",
          note: "Proteína ✦ Fibra ✦ Ferro"
        }
      },
      {
        day: "Terça-Feira", short: "Ter",
        snack: { adults: "Iogurte + Cereais", child: "Iogurte + Cereais" },
        soup:  { adults: "Creme de Ervilhas", child: "Creme de Ervilhas" },
        lunch: {
          adults: "Churrasco com Massa 'Case Comigo' e Salada Picadinha",
          child:  "Carne Grelhada com Massa e Legumes Picados",
          cal_adults: "~530 kcal", cal_child: "~390 kcal",
          note: "Proteína ✦ Hidratos complexos ✦ Vitaminas"
        },
        dinner: {
          adults: "Croquetes de Frango",
          child:  "Croquetes de Frango assados (versão sem fritura)",
          cal_adults: "~310 kcal", cal_child: "~240 kcal",
          note: "Proteína magra ✦ Cálcio"
        }
      },
      {
        day: "Quarta-Feira", short: "Qua",
        snack: { adults: "4 Bolachas + Fruta", child: "4 Bolachas + Fruta" },
        soup:  { adults: "Creme de Courgette", child: "Creme de Courgette" },
        lunch: {
          adults: "Espaguete de Curgete com Lentilha, Salada de Manga e Peixe à Milanesa",
          child:  "Massa Esparguete com Lentilhas e Peixe panado no forno",
          cal_adults: "~470 kcal", cal_child: "~360 kcal",
          note: "Fibra ✦ Proteína vegetal ✦ Vitamina C"
        },
        dinner: {
          adults: "Sandwich de Atún y Huevo",
          child:  "Sandes de Atum com ovo cozido",
          cal_adults: "~290 kcal", cal_child: "~240 kcal",
          note: "Ómega-3 ✦ Proteína ✦ Cálcio"
        }
      },
      {
        day: "Quinta-Feira", short: "Qui",
        snack: { adults: "Pão c/ Queijo + Fruta", child: "Pão c/ Queijo + Fruta" },
        soup:  { adults: "Creme de Courgette", child: "Creme de Courgette" },
        lunch: {
          adults: "Carne de Porco com Puré de Abóbora e Arroz Japonês + Legumes Salteados",
          child:  "Carne de Porco magra com Puré de Abóbora e Arroz",
          cal_adults: "~540 kcal", cal_child: "~390 kcal",
          note: "Beta-caroteno ✦ Zinco ✦ Vitaminas B"
        },
        dinner: {
          adults: "Sopa / Restos", child: "Sopa / Restos",
          cal_adults: "~200 kcal", cal_child: "~180 kcal",
          note: "Refeição leve"
        }
      },
      {
        day: "Sexta-Feira", short: "Sex",
        snack: { adults: "Pipocas + Fruta", child: "Pipocas sem sal + Fruta" },
        soup:  { adults: "Creme de Courgette", child: "Creme de Courgette" },
        lunch: {
          adults: "Salada Russa com Lagosta e Salada Verde",
          child:  "Salada de Batata com Ovo e Cenoura",
          cal_adults: "~420 kcal", cal_child: "~310 kcal",
          note: "Proteína ✦ Vitaminas ✦ Fibra"
        },
        dinner: {
          adults: "Sandwich", child: "Sandes simples com fiambre e queijo",
          cal_adults: "~280 kcal", cal_child: "~220 kcal",
          note: "Cálcio ✦ Hidratos moderados"
        }
      },
      {
        day: "Sábado", short: "Sáb",
        snack: { adults: "—", child: "—" },
        soup:  { adults: "—", child: "—" },
        lunch: {
          adults: "Calulu de Peixe Fresco e Seco c/ Feijão de Óleo de Palma e Kizaca",
          child:  "Douradinhos com Arroz de Cenoura",
          cal_adults: "~510 kcal", cal_child: "~370 kcal",
          note: "Prato tradicional ✦ Ómega-3 ✦ Ferro"
        },
        dinner: {
          adults: "Chicken Doner Wraps",
          child:  "Wrap de Frango simples com legumes",
          cal_adults: "~400 kcal", cal_child: "~300 kcal",
          note: "Proteína ✦ Fibra ✦ Vitaminas"
        }
      },
      {
        day: "Domingo", short: "Dom",
        snack: { adults: "—", child: "—" },
        soup:  { adults: "—", child: "—" },
        lunch: {
          adults: "Galinhada com Salada",
          child:  "Galinhada (porção menor) com Arroz e Salada",
          cal_adults: "~520 kcal", cal_child: "~360 kcal",
          note: "Proteína ✦ Ferro ✦ Vitaminas B"
        },
        dinner: {
          adults: "—", child: "—",
          cal_adults: "—", cal_child: "—",
          note: "Refeição livre ou leve"
        }
      }
    ]
  },
  {
    id: 4,
    days: [
      {
        day: "Segunda-Feira", short: "Seg",
        snack: { adults: "Bolo ou Panquecas + Iogurte", child: "Bolo ou Panquecas + Iogurte" },
        soup:  { adults: "Creme de Ervilhas ou Courgette", child: "Creme de Ervilhas ou Courgette" },
        lunch: {
          adults: "Postas de Peixe na Grelha au Meunier com Batata Doce Assada e Legumes",
          child:  "Peixe Grelhado com Batata Doce e Legumes cozidos",
          cal_adults: "~450 kcal", cal_child: "~330 kcal",
          note: "Ómega-3 ✦ Beta-caroteno ✦ Vitamina D"
        },
        dinner: {
          adults: "Sopa / Restos", child: "Sopa / Restos",
          cal_adults: "~200 kcal", cal_child: "~180 kcal",
          note: "Refeição leve"
        }
      },
      {
        day: "Terça-Feira", short: "Ter",
        snack: { adults: "Pão c/ Manteiga + Sumo", child: "Pão c/ Manteiga + Sumo natural" },
        soup:  { adults: "Creme de Ervilhas ou Courgette", child: "Creme de Ervilhas ou Courgette" },
        lunch: {
          adults: "Churrasco com Salada de Couscous e Milho (salada de milho mexicana) + Salada Verde",
          child:  "Carne Grelhada com Couscous e Milho",
          cal_adults: "~530 kcal", cal_child: "~380 kcal",
          note: "Proteína ✦ Fibra ✦ Vitamina B3"
        },
        dinner: {
          adults: "Tapioca com Patê de Frango",
          child:  "Tapioca com Frango desfiado e queijo",
          cal_adults: "~300 kcal", cal_child: "~250 kcal",
          note: "Hidratos sem glúten ✦ Proteína magra"
        }
      },
      {
        day: "Quarta-Feira", short: "Qua",
        snack: { adults: "4 Bolachas + Batido de Fruta", child: "4 Bolachas + Batido de Fruta" },
        soup:  { adults: "Creme de Ervilhas ou Courgette", child: "Creme de Ervilhas ou Courgette" },
        lunch: {
          adults: "Caril de Peixe e Camarão com Côco e Abacaxi com Arroz Branco + Legumes",
          child:  "Caril suave de Peixe com Côco e Arroz (menos especiarias)",
          cal_adults: "~510 kcal", cal_child: "~370 kcal",
          note: "Ómega-3 ✦ Anti-inflamatório ✦ Vitamina C"
        },
        dinner: {
          adults: "Sopa", child: "Sopa",
          cal_adults: "~180 kcal", cal_child: "~160 kcal",
          note: "Refeição muito leve"
        }
      },
      {
        day: "Quinta-Feira", short: "Qui",
        snack: { adults: "Croissant c/ Fiambre + Ice Tea", child: "Croissant c/ Fiambre + Leite" },
        soup:  { adults: "Creme de Ervilhas ou Courgette", child: "Creme de Ervilhas ou Courgette" },
        lunch: {
          adults: "Rosbife com Puré ou Batatas Assadas e Cenoura Assada",
          child:  "Rosbife fatiado fino com Puré e Cenoura Assada",
          cal_adults: "~540 kcal", cal_child: "~390 kcal",
          note: "Ferro ✦ Zinco ✦ Beta-caroteno"
        },
        dinner: {
          adults: "Sandes de Rosbife",
          child:  "Sandes de Rosbife com alface e tomate",
          cal_adults: "~300 kcal", cal_child: "~240 kcal",
          note: "Proteína ✦ Ferro"
        }
      },
      {
        day: "Sexta-Feira", short: "Sex",
        snack: { adults: "Fruta + Pipocas", child: "Fruta + Pipocas sem sal" },
        soup:  { adults: "Creme de Ervilhas ou Courgette", child: "Creme de Ervilhas ou Courgette" },
        lunch: {
          adults: "Croquetes/Rissois com Arroz Pilaf e Espinafres + Salada de Tomate",
          child:  "Rissóis assados com Arroz e Espinafres salteados",
          cal_adults: "~480 kcal", cal_child: "~350 kcal",
          note: "Ferro ✦ Vitamina K ✦ Cálcio"
        },
        dinner: {
          adults: "Resto do Almoço", child: "Resto do Almoço",
          cal_adults: "~280 kcal", cal_child: "~220 kcal",
          note: "Zero desperdício"
        }
      },
      {
        day: "Sábado", short: "Sáb",
        snack: { adults: "—", child: "—" },
        soup:  { adults: "—", child: "—" },
        lunch: {
          adults: "Funge de Carne Seca e Muteta com Folhas Verdes / Funge com Chouriço e Ovo Cozido",
          child:  "Arroz de Atum Completo",
          cal_adults: "~530 kcal", cal_child: "~360 kcal",
          note: "Proteína ✦ Ferro ✦ Vitaminas B"
        },
        dinner: {
          adults: "Banh Mi",
          child:  "Sandes com Frango e Legumes",
          cal_adults: "~390 kcal", cal_child: "~290 kcal",
          note: "Proteína ✦ Fibra ✦ Probióticos (pickles)"
        }
      },
      {
        day: "Domingo", short: "Dom",
        snack: { adults: "—", child: "—" },
        soup:  { adults: "—", child: "—" },
        lunch: {
          adults: "Ensopado do Mar",
          child:  "Sopa de Peixe com Batata e Arroz",
          cal_adults: "~480 kcal", cal_child: "~350 kcal",
          note: "Ómega-3 ✦ Iodo ✦ Proteína completa"
        },
        dinner: {
          adults: "—", child: "—",
          cal_adults: "—", cal_child: "—",
          note: "Refeição livre ou leve"
        }
      }
    ]
  },
  {
    id: 5,
    days: [
      {
        day: "Segunda-Feira", short: "Seg",
        snack: { adults: "Bolo ou Panquecas + Iogurte", child: "Bolo ou Panquecas + Iogurte" },
        soup:  { adults: "Canja com Miúdos", child: "Canja com Miúdos" },
        lunch: {
          adults: "Espetadas de Peixe e Camarão com Ananás, Batata-Doce Assada e Legumes no Forno",
          child:  "Espetada de Peixe no forno com Batata-Doce e Legumes",
          cal_adults: "~470 kcal", cal_child: "~340 kcal",
          note: "Ómega-3 ✦ Vitamina C ✦ Beta-caroteno"
        },
        dinner: {
          adults: "Queijo Crocante com Patê de Ovo",
          child:  "Queijo tostado com Ovo mexido",
          cal_adults: "~290 kcal", cal_child: "~240 kcal",
          note: "Cálcio ✦ Proteína ✦ Vitamina D"
        }
      },
      {
        day: "Terça-Feira", short: "Ter",
        snack: { adults: "Pão c/ Manteiga e Fiambre + Fruta", child: "Pão c/ Manteiga e Fiambre + Fruta" },
        soup:  { adults: "Canja com Miúdos", child: "Canja com Miúdos" },
        lunch: {
          adults: "Frango no Forno com Puré de Mandioquinha e Molho de Manteiga e Salsinha + Salada de Couve Roxa",
          child:  "Frango no Forno com Puré de Mandioquinha e Legumes",
          cal_adults: "~510 kcal", cal_child: "~370 kcal",
          note: "Proteína magra ✦ Vitamina C ✦ Antioxidantes"
        },
        dinner: {
          adults: "Pão com Ovo na Frigideira",
          child:  "Pão com Ovo estrelado",
          cal_adults: "~280 kcal", cal_child: "~230 kcal",
          note: "Proteína ✦ Hidratos"
        }
      },
      {
        day: "Quarta-Feira", short: "Qua",
        snack: { adults: "Fruta + Pipocas", child: "Fruta + Pipocas sem sal" },
        soup:  { adults: "Caldo Verde", child: "Caldo Verde" },
        lunch: {
          adults: "Peixe Grelhado com Arroz Pilaf de Espinafres, Camarões com Manteiga e Limão + Salada Verde",
          child:  "Peixe Grelhado com Arroz de Espinafres e Camarões",
          cal_adults: "~490 kcal", cal_child: "~360 kcal",
          note: "Ómega-3 ✦ Ferro ✦ Vitamina K ✦ Vitamina C"
        },
        dinner: {
          adults: "Sopa / Restos", child: "Sopa / Restos",
          cal_adults: "~200 kcal", cal_child: "~180 kcal",
          note: "Refeição leve"
        }
      },
      {
        day: "Quinta-Feira", short: "Qui",
        snack: { adults: "Iogurte + 4 Bolachas", child: "Iogurte + 4 Bolachas" },
        soup:  { adults: "Caldo Verde", child: "Caldo Verde" },
        lunch: {
          adults: "Pilaf de Frango com Bulgur e Grão-de-Bico + Salada Verde",
          child:  "Frango com Bulgur e Grão-de-Bico (porção menor)",
          cal_adults: "~500 kcal", cal_child: "~360 kcal",
          note: "Proteína completa ✦ Fibra ✦ Ferro"
        },
        dinner: {
          adults: "Sopa / Restos", child: "Sopa / Restos",
          cal_adults: "~200 kcal", cal_child: "~180 kcal",
          note: "Refeição leve"
        }
      },
      {
        day: "Sexta-Feira", short: "Sex",
        snack: { adults: "Croissant c/ Manteiga + Sumo", child: "Croissant c/ Manteiga + Sumo natural" },
        soup:  { adults: "Caldo Verde", child: "Caldo Verde" },
        lunch: {
          adults: "Dedos de Peixe Caseiros com Batata Pimentão Doce e Molho Tártaro + Salada de Beterraba com Laranja",
          child:  "Dedos de Peixe assados com Batata-doce e Molho Tártaro suave",
          cal_adults: "~480 kcal", cal_child: "~350 kcal",
          note: "Ómega-3 ✦ Beta-caroteno ✦ Vitamina C"
        },
        dinner: {
          adults: "Fish Finger Sandwich",
          child:  "Sandes de Peixe panado com alface",
          cal_adults: "~310 kcal", cal_child: "~250 kcal",
          note: "Ómega-3 ✦ Proteína"
        }
      },
      {
        day: "Sábado", short: "Sáb",
        snack: { adults: "—", child: "—" },
        soup:  { adults: "—", child: "—" },
        lunch: {
          adults: "Funge com Moamba de Galinha e Folhas Verdes",
          child:  "Polenta com Frango Guisado e Legumes",
          cal_adults: "~520 kcal", cal_child: "~380 kcal",
          note: "Prato tradicional ✦ Proteína ✦ Vitaminas"
        },
        dinner: {
          adults: "Ovos Rotos com Linguiças",
          child:  "Ovos mexidos com salsichas suaves",
          cal_adults: "~370 kcal", cal_child: "~280 kcal",
          note: "Proteína ✦ Ferro"
        }
      },
      {
        day: "Domingo", short: "Dom",
        snack: { adults: "—", child: "—" },
        soup:  { adults: "—", child: "—" },
        lunch: {
          adults: "Moqueca de Camarão com Nhoque de Banana da Pão",
          child:  "Camarão no Côco suave com Nhoque de Banana",
          cal_adults: "~530 kcal", cal_child: "~380 kcal",
          note: "Ómega-3 ✦ Potássio ✦ Vitamina C"
        },
        dinner: {
          adults: "—", child: "—",
          cal_adults: "—", cal_child: "—",
          note: "Refeição livre ou leve"
        }
      }
    ]
  }
]

export const MEAL_TYPES = ["snack", "soup", "lunch", "dinner"]
export const MEAL_LABELS = { snack: "Lanche", soup: "Sopa", lunch: "Almoço", dinner: "Jantar" }
export const MEAL_ICONS  = { snack: "🍎", soup: "🥣", lunch: "🍽️", dinner: "🌙" }

export const ADULTS = [
  { key: "mavita",  label: "Mavita",  emoji: "👩🏾",    role: "Mãe", color: "#9b59b6", bg: "rgba(155,89,182,0.12)",  border: "#9b59b6" },
  { key: "claudio", label: "Cláudio", emoji: "👨🏾",    role: "Pai", color: "#2980b9", bg: "rgba(41,128,185,0.12)",  border: "#2980b9" },
]

export const CHILD = {
  key: "nayane", label: "Nayane", emoji: "🧒🏾", role: "8 anos",
  color: "#e87020", bg: "rgba(232,112,32,0.12)", border: "#e87020"
}

export const NUTRITION_TIPS = [
  "🥦 Sempre inclua legumes em pelo menos 2 refeições por dia",
  "🐟 Peixe pelo menos 3× por semana para ómega-3",
  "💧 2L de água por dia para adultos, 1.5L para a Nayane",
  "🌾 Prefira hidratos integrais ao jantar",
  "🥚 Ovos são aliados — proteína + vitamina D",
  "🍊 Fruta como lanche evita picos de açúcar",
  "🫀 Reduza sal nas refeições da Nayane",
  "🥗 Salada antes do prato principal ajuda na saciedade",
]
