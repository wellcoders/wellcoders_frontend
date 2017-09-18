import { Injectable } from "@angular/core";
import { Article } from "./article";

@Injectable()
export class ArticleService {
  private article1 = Article.fromJson({
    title:
      "Encuentran tras dos semanas de búsqueda un pan que jugaba al escondite",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus arcu, scelerisque sed ullamcorper vel, varius et neque. Curabitur enim nisl, feugiat vulputate interdum quis, hendrerit quis elit. Fusce orci metus, pellentesque congue est viverra, commodo tincidunt elit. Fusce ut neque nec nunc dictum molestie. Phasellus cursus ornare nibh, ut pulvinar nibh interdum in. Nullam imperdiet nulla nec fringilla rhoncus. Aliquam rhoncus vitae mauris ut iaculis. Nullam vulputate ligula vitae metus dictum tempor. Maecenas mollis laoreet sem eu gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus arcu, scelerisque sed ullamcorper vel, varius et neque. Curabitur enim nisl, feugiat vulputate interdum quis, hendrerit quis elit. Fusce orci metus, pellentesque congue est viverra, commodo tincidunt elit. Fusce ut neque nec nunc dictum molestie. Phasellus cursus ornare nibh, ut pulvinar nibh interdum in. Nullam imperdiet nulla nec fringilla rhoncus. Aliquam rhoncus vitae mauris ut iaculis. Nullam vulputate ligula vitae metus dictum tempor. Maecenas mollis laoreet sem eu gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus arcu, scelerisque sed ullamcorper vel, varius et neque. Curabitur enim nisl, feugiat vulputate interdum quis, hendrerit quis elit. Fusce orci metus, pellentesque congue est viverra, commodo tincidunt elit. Fusce ut neque nec nunc dictum molestie. Phasellus cursus ornare nibh, ut pulvinar nibh interdum in. Nullam imperdiet nulla nec fringilla rhoncus. Aliquam rhoncus vitae mauris ut iaculis. Nullam vulputate ligula vitae metus dictum tempor. Maecenas mollis laoreet sem eu gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus arcu, scelerisque sed ullamcorper vel, varius et neque. Curabitur enim nisl, feugiat vulputate interdum quis, hendrerit quis elit. Fusce orci metus, pellentesque congue est viverra, commodo tincidunt elit. Fusce ut neque nec nunc dictum molestie. Phasellus cursus ornare nibh, ut pulvinar nibh interdum in. Nullam imperdiet nulla nec fringilla rhoncus. Aliquam rhoncus vitae mauris ut iaculis. Nullam vulputate ligula vitae metus dictum tempor. Maecenas mollis laoreet sem eu gravida.",
    body:
      "Morbi hendrerit ultricies feugiat. Aliquam erat volutpat. Curabitur consequat nibh non metus porta imperdiet. Aenean in dapibus leo. Suspendisse molestie tempus nulla sit amet laoreet. Mauris non risus eu risus posuere gravida. Phasellus fermentum eu mauris ut sollicitudin. Vivamus rutrum scelerisque mattis. Cras scelerisque aliquam nibh non mattis. Aliquam erat volutpat. Etiam gravida erat id dapibus bibendum. Nullam elementum suscipit volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis lacinia quis eros in vehicula. Praesent non dui nec dolor consequat tincidunt. Nunc mi sem, lobortis a vestibulum a, elementum non nulla. Morbi quis velit quam. Mauris sit amet vulputate urna, laoreet tristique elit. Donec ultrices gravida massa, in suscipit nunc dapibus a. Curabitur et ultrices nunc. Pellentesque pharetra interdum ex a condimentum. Donec finibus maximus sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque dapibus ornare aliquam.\n\nSed cursus felis diam, vel rhoncus ex tincidunt sed. Nulla ornare dui et felis luctus, vitae bibendum nisi posuere. Quisque consectetur mauris vitae sem tincidunt dapibus. Praesent at odio a velit sollicitudin porta. Quisque ut faucibus urna. Etiam fermentum dui in pretium facilisis. Sed pellentesque lacus vitae mauris venenatis dapibus. Donec a nulla feugiat neque placerat hendrerit eu in tellus. Morbi nec nunc at turpis semper posuere quis sed ex. Mauris venenatis nulla in lobortis hendrerit. Ut condimentum faucibus ipsum, eu ullamcorper ipsum ullamcorper id. Cras nec magna vitae odio malesuada bibendum. Aenean posuere erat in molestie accumsan. Morbi nec nisl eros. Praesent quis vulputate arcu.\n\nMorbi quis risus ac ante euismod bibendum et ut diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi mattis mi in tortor fermentum, vitae placerat mauris tempus. Nulla tellus sapien, interdum quis leo at, aliquam auctor mauris. Nunc rutrum leo risus, vel auctor arcu vulputate vel. In iaculis sapien consequat, laoreet ligula id, iaculis eros. Etiam congue tortor nec nibh semper placerat.",
    media: "assets/images/bread-1510298_640.jpg",
    publish_date: new Date("February 4, 2016 10:13:00"),
    owner: {
      id: 4,
      name: "Hank Moody",
      ownername: "godhatesusall",
      email: "ilove@runkle.com",
      avatar: "assets/images/hank-moody.jpg"
    },
    category: {
      id: 5,
      name: "Poor thing"
    },
    likes: [2, 3],
    id: 1
  });
  private article2 = Article.fromJson({
    title: "Toro emo causa sensación en la comunidad bovina",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus arcu, scelerisque sed ullamcorper vel, varius et neque. Curabitur enim nisl, feugiat vulputate interdum quis, hendrerit quis elit. Fusce orci metus, pellentesque congue est viverra, commodo tincidunt elit. Fusce ut neque nec nunc dictum molestie. Phasellus cursus ornare nibh, ut pulvinar nibh interdum in. Nullam imperdiet nulla nec fringilla rhoncus. Aliquam rhoncus vitae mauris ut iaculis. Nullam vulputate ligula vitae metus dictum tempor. Maecenas mollis laoreet sem eu gravida.",
    body:
      "Morbi hendrerit ultricies feugiat. Aliquam erat volutpat. Curabitur consequat nibh non metus porta imperdiet. Aenean in dapibus leo. Suspendisse molestie tempus nulla sit amet laoreet. Mauris non risus eu risus posuere gravida. Phasellus fermentum eu mauris ut sollicitudin. Vivamus rutrum scelerisque mattis. Cras scelerisque aliquam nibh non mattis. Aliquam erat volutpat. Etiam gravida erat id dapibus bibendum. Nullam elementum suscipit volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis lacinia quis eros in vehicula. Praesent non dui nec dolor consequat tincidunt. Nunc mi sem, lobortis a vestibulum a, elementum non nulla. Morbi quis velit quam. Mauris sit amet vulputate urna, laoreet tristique elit. Donec ultrices gravida massa, in suscipit nunc dapibus a. Curabitur et ultrices nunc. Pellentesque pharetra interdum ex a condimentum. Donec finibus maximus sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque dapibus ornare aliquam.\n\nSed cursus felis diam, vel rhoncus ex tincidunt sed. Nulla ornare dui et felis luctus, vitae bibendum nisi posuere. Quisque consectetur mauris vitae sem tincidunt dapibus. Praesent at odio a velit sollicitudin porta. Quisque ut faucibus urna. Etiam fermentum dui in pretium facilisis. Sed pellentesque lacus vitae mauris venenatis dapibus. Donec a nulla feugiat neque placerat hendrerit eu in tellus. Morbi nec nunc at turpis semper posuere quis sed ex. Mauris venenatis nulla in lobortis hendrerit. Ut condimentum faucibus ipsum, eu ullamcorper ipsum ullamcorper id. Cras nec magna vitae odio malesuada bibendum. Aenean posuere erat in molestie accumsan. Morbi nec nisl eros. Praesent quis vulputate arcu.\n\nMorbi quis risus ac ante euismod bibendum et ut diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi mattis mi in tortor fermentum, vitae placerat mauris tempus. Nulla tellus sapien, interdum quis leo at, aliquam auctor mauris. Nunc rutrum leo risus, vel auctor arcu vulputate vel. In iaculis sapien consequat, laoreet ligula id, iaculis eros. Etiam congue tortor nec nibh semper placerat.",
    media: "assets/images/bull-1575003_640.jpg",
    publish_date: new Date("February 4, 2016 10:13:00"),
    owner: {
      id: 4,
      name: "Hank Moody",
      ownername: "godhatesusall",
      email: "ilove@runkle.com",
      avatar: "assets/images/hank-moody.jpg"
    },
    category: {
      id: 3,
      name: "Tendencias"
    },
    likes: [3, 4],
    id: 2
  });
  private article3 = Article.fromJson({
    title: "Gandalf, nueva imagen de Grecian for Men",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus arcu, scelerisque sed ullamcorper vel, varius et neque. Curabitur enim nisl, feugiat vulputate interdum quis, hendrerit quis elit. Fusce orci metus, pellentesque congue est viverra, commodo tincidunt elit. Fusce ut neque nec nunc dictum molestie. Phasellus cursus ornare nibh, ut pulvinar nibh interdum in. Nullam imperdiet nulla nec fringilla rhoncus. Aliquam rhoncus vitae mauris ut iaculis. Nullam vulputate ligula vitae metus dictum tempor. Maecenas mollis laoreet sem eu gravida.",
    body:
      "Morbi hendrerit ultricies feugiat. Aliquam erat volutpat. Curabitur consequat nibh non metus porta imperdiet. Aenean in dapibus leo. Suspendisse molestie tempus nulla sit amet laoreet. Mauris non risus eu risus posuere gravida. Phasellus fermentum eu mauris ut sollicitudin. Vivamus rutrum scelerisque mattis. Cras scelerisque aliquam nibh non mattis. Aliquam erat volutpat. Etiam gravida erat id dapibus bibendum. Nullam elementum suscipit volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis lacinia quis eros in vehicula. Praesent non dui nec dolor consequat tincidunt. Nunc mi sem, lobortis a vestibulum a, elementum non nulla. Morbi quis velit quam. Mauris sit amet vulputate urna, laoreet tristique elit. Donec ultrices gravida massa, in suscipit nunc dapibus a. Curabitur et ultrices nunc. Pellentesque pharetra interdum ex a condimentum. Donec finibus maximus sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque dapibus ornare aliquam.\n\nSed cursus felis diam, vel rhoncus ex tincidunt sed. Nulla ornare dui et felis luctus, vitae bibendum nisi posuere. Quisque consectetur mauris vitae sem tincidunt dapibus. Praesent at odio a velit sollicitudin porta. Quisque ut faucibus urna. Etiam fermentum dui in pretium facilisis. Sed pellentesque lacus vitae mauris venenatis dapibus. Donec a nulla feugiat neque placerat hendrerit eu in tellus. Morbi nec nunc at turpis semper posuere quis sed ex. Mauris venenatis nulla in lobortis hendrerit. Ut condimentum faucibus ipsum, eu ullamcorper ipsum ullamcorper id. Cras nec magna vitae odio malesuada bibendum. Aenean posuere erat in molestie accumsan. Morbi nec nisl eros. Praesent quis vulputate arcu.\n\nMorbi quis risus ac ante euismod bibendum et ut diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi mattis mi in tortor fermentum, vitae placerat mauris tempus. Nulla tellus sapien, interdum quis leo at, aliquam auctor mauris. Nunc rutrum leo risus, vel auctor arcu vulputate vel. In iaculis sapien consequat, laoreet ligula id, iaculis eros. Etiam congue tortor nec nibh semper placerat.",
    media: "assets/images/human-1411499_640.jpg",
    publish_date: new Date("February 4, 2016 10:13:00"),
    owner: {
      id: 4,
      name: "Hank Moody",
      ownername: "godhatesusall",
      email: "ilove@runkle.com",
      avatar: "assets/images/hank-moody.jpg"
    },
    category: {
      id: 3,
      name: "Tendencias"
    },
    likes: [4, 1],
    id: 3
  });

  private article4 = Article.fromJson({
    title:
      "Señor asiático se defiende de las acusaciones que dicen que no hace ni el huevo en todo el día",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus arcu, scelerisque sed ullamcorper vel, varius et neque. Curabitur enim nisl, feugiat vulputate interdum quis, hendrerit quis elit. Fusce orci metus, pellentesque congue est viverra, commodo tincidunt elit. Fusce ut neque nec nunc dictum molestie. Phasellus cursus ornare nibh, ut pulvinar nibh interdum in. Nullam imperdiet nulla nec fringilla rhoncus. Aliquam rhoncus vitae mauris ut iaculis. Nullam vulputate ligula vitae metus dictum tempor. Maecenas mollis laoreet sem eu gravida.",
    body:
      "Morbi hendrerit ultricies feugiat. Aliquam erat volutpat. Curabitur consequat nibh non metus porta imperdiet. Aenean in dapibus leo. Suspendisse molestie tempus nulla sit amet laoreet. Mauris non risus eu risus posuere gravida. Phasellus fermentum eu mauris ut sollicitudin. Vivamus rutrum scelerisque mattis. Cras scelerisque aliquam nibh non mattis. Aliquam erat volutpat. Etiam gravida erat id dapibus bibendum. Nullam elementum suscipit volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis lacinia quis eros in vehicula. Praesent non dui nec dolor consequat tincidunt. Nunc mi sem, lobortis a vestibulum a, elementum non nulla. Morbi quis velit quam. Mauris sit amet vulputate urna, laoreet tristique elit. Donec ultrices gravida massa, in suscipit nunc dapibus a. Curabitur et ultrices nunc. Pellentesque pharetra interdum ex a condimentum. Donec finibus maximus sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque dapibus ornare aliquam.\n\nSed cursus felis diam, vel rhoncus ex tincidunt sed. Nulla ornare dui et felis luctus, vitae bibendum nisi posuere. Quisque consectetur mauris vitae sem tincidunt dapibus. Praesent at odio a velit sollicitudin porta. Quisque ut faucibus urna. Etiam fermentum dui in pretium facilisis. Sed pellentesque lacus vitae mauris venenatis dapibus. Donec a nulla feugiat neque placerat hendrerit eu in tellus. Morbi nec nunc at turpis semper posuere quis sed ex. Mauris venenatis nulla in lobortis hendrerit. Ut condimentum faucibus ipsum, eu ullamcorper ipsum ullamcorper id. Cras nec magna vitae odio malesuada bibendum. Aenean posuere erat in molestie accumsan. Morbi nec nisl eros. Praesent quis vulputate arcu.\n\nMorbi quis risus ac ante euismod bibendum et ut diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi mattis mi in tortor fermentum, vitae placerat mauris tempus. Nulla tellus sapien, interdum quis leo at, aliquam auctor mauris. Nunc rutrum leo risus, vel auctor arcu vulputate vel. In iaculis sapien consequat, laoreet ligula id, iaculis eros. Etiam congue tortor nec nibh semper placerat.",
    media: "assets/images/iman-1459322_640.jpg",
    publish_date: new Date("February 4, 2016 10:13:00"),
    owner: {
      id: 4,
      name: "Hank Moody",
      ownername: "godhatesusall",
      email: "ilove@runkle.com",
      avatar: "assets/images/hank-moody.jpg"
    },
    category: {
      id: 2,
      name: "Esto es serio"
    },
    likes: [],
    id: 4
  });

  private article5 = Article.fromJson({
    title: "Movember también es tendencia en el mundo animal",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus arcu, scelerisque sed ullamcorper vel, varius et neque. Curabitur enim nisl, feugiat vulputate interdum quis, hendrerit quis elit. Fusce orci metus, pellentesque congue est viverra, commodo tincidunt elit. Fusce ut neque nec nunc dictum molestie. Phasellus cursus ornare nibh, ut pulvinar nibh interdum in. Nullam imperdiet nulla nec fringilla rhoncus. Aliquam rhoncus vitae mauris ut iaculis. Nullam vulputate ligula vitae metus dictum tempor. Maecenas mollis laoreet sem eu gravida.",
    body:
      "Morbi hendrerit ultricies feugiat. Aliquam erat volutpat. Curabitur consequat nibh non metus porta imperdiet. Aenean in dapibus leo. Suspendisse molestie tempus nulla sit amet laoreet. Mauris non risus eu risus posuere gravida. Phasellus fermentum eu mauris ut sollicitudin. Vivamus rutrum scelerisque mattis. Cras scelerisque aliquam nibh non mattis. Aliquam erat volutpat. Etiam gravida erat id dapibus bibendum. Nullam elementum suscipit volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n\nDuis lacinia quis eros in vehicula. Praesent non dui nec dolor consequat tincidunt. Nunc mi sem, lobortis a vestibulum a, elementum non nulla. Morbi quis velit quam. Mauris sit amet vulputate urna, laoreet tristique elit. Donec ultrices gravida massa, in suscipit nunc dapibus a. Curabitur et ultrices nunc. Pellentesque pharetra interdum ex a condimentum. Donec finibus maximus sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque dapibus ornare aliquam.\n\nSed cursus felis diam, vel rhoncus ex tincidunt sed. Nulla ornare dui et felis luctus, vitae bibendum nisi posuere. Quisque consectetur mauris vitae sem tincidunt dapibus. Praesent at odio a velit sollicitudin porta. Quisque ut faucibus urna. Etiam fermentum dui in pretium facilisis. Sed pellentesque lacus vitae mauris venenatis dapibus. Donec a nulla feugiat neque placerat hendrerit eu in tellus. Morbi nec nunc at turpis semper posuere quis sed ex. Mauris venenatis nulla in lobortis hendrerit. Ut condimentum faucibus ipsum, eu ullamcorper ipsum ullamcorper id. Cras nec magna vitae odio malesuada bibendum. Aenean posuere erat in molestie accumsan. Morbi nec nisl eros. Praesent quis vulputate arcu.\n\nMorbi quis risus ac ante euismod bibendum et ut diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi mattis mi in tortor fermentum, vitae placerat mauris tempus. Nulla tellus sapien, interdum quis leo at, aliquam auctor mauris. Nunc rutrum leo risus, vel auctor arcu vulputate vel. In iaculis sapien consequat, laoreet ligula id, iaculis eros. Etiam congue tortor nec nibh semper placerat.",
    media: "assets/images/owl-1705112_640.jpg",
    publish_date: new Date("February 4, 2016 10:13:00"),
    owner: {
      id: 4,
      name: "Hank Moody",
      ownername: "godhatesusall",
      email: "ilove@runkle.com",
      avatar: "assets/images/hank-moody.jpg"
    },
    category: {
      id: 3,
      name: "Tendencias"
    },
    likes: [2, 4, 1],
    id: 5
  });

  articles: Article[] = [
    this.article1,
    this.article2,
    this.article3,
    this.article4,
    this.article5
  ];

  constructor() {}

  getAticles() {
    return this.articles;
  }
}
