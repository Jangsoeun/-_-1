
const principles = [
    { summary: "Georgia <br> O'Keeffe", 
      detail:"The exhibition is organized by Samantha Friedman, Associate Curator, Department of Drawings and Prints, with Laura Neufeld, Associate Paper Conservator, The David Booth Conservation Department, and Emily Olek, Curatorial Assistant, Department of Drawings and Prints. Realized with the participation of the Georgia O'Keeffe Museum, Santa Fe."},
  
    {summary: "Chosen <br> Memories", 
      detail:"Chosen Memories brings together contemporary works by Latin American artists who have been investigating history as source material for their work. “History is a living organism,” said the Brazilian artist ​​Rosângela Rennó, one of the 40 artists featured in the exhibition. Bringing together videos, photographs, paintings, and sculptures made over the past four decades, the exhibition reveals how some of today's most relevant art is conceived through investigating and retelling history in new ways."
    },
  
    {summary: "Lawrence <br> Elizabeth ", 
      detail:"For several decades beginning during World War I, millions of Black Americans left the southern United States for the ​​North, Midwest, and West—a mass exodus known as the Great Migration. A child of migrants, Jacob Lawrence grew up in Harlem, where he set out from an early age to make art that addressed Black histories. “This is my genre...the happiness, tragedies, and the sorrows of mankind,” Lawrence stated. In 1940 he embarked on the Migration Series: 60 paintings featuring bold colors, pared-down forms, and narrative captions."
    },
  
    {summary: "Refik  <br> Marshall", 
      detail:"What would a machine dream about after seeing the collection of The Museum of Modern Art? For Unsupervised, artist Refik Anadol (b. 1985) uses artificial intelligence to interpret and transform more than 200 years of art at MoMA. Known for his groundbreaking media works and public installations, Anadol has created digital artworks that unfold in real time, continuously generating new and otherworldly forms that envelop viewers in a large-scale installation."
    },

    {summary: "James <br> Anadol", 
    detail:"Marshall made this painting at a time when news about police killings of unarmed black men, women, and children was proliferating across the United States, leading to the inception of the Black Lives Matter movement. Though unmistakably topical, the painting offers a somewhat unexpected and challenging visual response to these overwhelming events. Perched on the hood of his squad car, the figure occupies categories often presented in the mass media as implacably antagonistic: he is both a black man and a police officer, seemingly locked into two conflicting identities."
    },

    {summary: "Moké", 
    detail:"This painting communicates the texture of daily life in Kinshasa, the capital of Zaïre (now the Democratic Republic of the Congo). Moké, who painted the scene from memory, was a leading practitioner of “popular painting,” a genre that gathered momentum in Zaïre after the nation gained independence from Belgian rule in the early 1960s. Like other popular painters, Moké focused on city life, documenting Kinshasa’s outdoor bars, high-spirited nightly activities, political rallies, street commerce, and musical performances. In this way, the artist devoted his career to creating rich portraits of a thriving postcolonial metropolis."
    },

    {summary: "Julie  <br> Dash", 
    detail:" Dash's feature film Daughters of the Dust is a languid, dreamy, and elegant meditation on the Gullah people of South Carolina and Georgia’s Sea Islands. Early in the twentieth century, many islanders, descendants of the Nigerian Igbo, decided to leave the secluded islands and travel north to find work in the burgeoning industrial economy. The film is narrated by an unborn girl child, who speaks of the importance of tradition, ancestors, and cultural legacy while many in the community pack for the journey north."
    },

    {summary: "Vaudeville", 
    detail:"A type of theatrical variety show, developed in the early 1880s in America, that remained the most popular form of entertainment until radio and film supplanted it in the late 1920s. It incorporated an array of short performances like singing, ventriloquism, plate-spinning, contortionists, dancing, performing animals, and, at its heart, comedy. Reflecting both the cultural diversity of early-20th-century America and its prejudices, vaudeville fused such traditions as the English Music Hall, minstrel shows of antebellum America, and Yiddish theater."
    },

    {summary: "Rachel <br> Whiteread ", 
    detail:"The symmetrical blocks in the center of the gallery are plaster casts of the space beneath an ordinary double bed, with four round holes demarcating the space once occupied by the bed's legs. Whiteread is known for casting domestic objects and their surrounding spaces, such as the undersides of tables, the interior of a bathtub, and even an entire row house in London's East End. The resulting works reconfigure our encounters with familiar objects and spaces, inviting us to see what is not there or to notice details that are normally hidden"
    },

    {summary: "Jan  <br> Dibbets ", 
    detail:"Partial gift of the Daled Collection and partial purchase through the generosity of Maja Oeri and Hans Bodenmann, Sue and Edgar Wachenheim III, Agnes Gund, Marlene Hess and James D. Zirin, Marie-Josée and Henry R. Kravis, and Jerry I. Speyer and Katherine G. Farley"
    },
  ]
  
  
  const numberTag = document.querySelector("section.product-intro h2.number")
  const summaryTag = document.querySelector("section.product-intro .sub_title")
  const detailTag = document.querySelector("section.product-image figcaption")
  
  const productImg = document.querySelector("section.product-image img")
  
  const leftButton = document.querySelector(".button_back")
  const rightButton = document.querySelector(".button_next")

  let currentNumber = 1;

  //뒤로가기 버튼 눌렀을 때 addEventLister//
  
  leftButton.addEventListener("click", function(){
  
    currentNumber--;
    if(currentNumber < 01){
      currentNumber = 10;
    }
  
    numberTag.innerHTML = currentNumber;
    productImg.src = `image/image0${currentNumber}.jpg`;
  
    summaryTag.innerHTML = principles[currentNumber-1].summary;
    detailTag.innerHTML = principles[currentNumber-1].detail;
  })
  
   //다음으로 가기 버튼 눌렀을 때 addEventLister//

  rightButton.addEventListener("click", function(){
  
    currentNumber++;
    if(currentNumber > 10){
      currentNumber = 01;
    }
  
    numberTag.innerHTML = currentNumber;
    // productImg.src = "product"+currentNumber+".jpg";
    productImg.src = `image/image0${currentNumber}.jpg`;
    
    summaryTag.innerHTML = principles[currentNumber-1].summary;
    detailTag.innerHTML = principles[currentNumber-1].detail;
  })