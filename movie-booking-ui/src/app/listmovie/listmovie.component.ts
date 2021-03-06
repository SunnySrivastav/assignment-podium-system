import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

export class Movie{
    constructor(
    public id:number,
    public name:string,
    public thumb:string,
    
    ){
  
    }
  }

@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.css']
})
export class ListmovieComponent implements OnInit {
    movies:Movie[]
// movies:any;
//   constructor() {
//    this.movies=[
//       {
//           "id": 0,
//           "name": "Iron Man",
//           "rating": 5,
//           "availability": 9,
//           "review": "Tony Stark is a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man. (Paramount Pictures, Marvel Studios)",
//           "thumb": "http://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg"
//           },
//       {
//           "id": 1,
//           "name": "Jurassic Park",
//           "rating": 5,
//           "availability": 3,
//           "review": "Featuring incredible special effects and action - packed drama, Jurassic Park takes you to a remote island where an amazing theme park with living dinosaurs is about to turn deadly, as five people must battle to survive among the prehistoric predators.(Universal Pictures)",
//           "thumb": "http://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg"
//           },
//       {
//           "id": 2,
//           "name": "Transformers",
//           "rating": 5,
//           "availability": 5,
//           "review": "Transformers: Dark of the Moon features Sam Witwicky taking his first tenuous steps into adulthood while remaining a reluctant human ally of Optimus Prime. The film centers around the space race between the U.S.S.R. and the USA, suggesting there was a hidden Transformers role in it all that remains one of the planet's most dangerous secrets. The villain of the third film will be Shockwave. (DreamWorks Pictures)",
//           "thumb": "http://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg"
//           },
//       {
//           "id": 3,
//           "name": "Avatar",
//           "rating": 4,
//           "availability": 3,
//           "review": "Jake Sully is a former Marine confined to a wheelchair. But despite his broken body, Jake is still a warrior at heart. He is recruited to travel light years to the human outpost on Pandora, where a corporate consortium is mining a rare mineral that is the key to solving Earth's energy crisis. Because Pandora's atmosphere is toxic, they have created the Avatar Program, in which human drivers  have their consciousness linked to an avatar, a remotely-controlled biological body that can survive in the lethal air. These avatars are genetically engineered hybrids of human DNA mixed with DNA from the natives of Pandora... the Na'vi. Reborn in his avatar form, Jake can walk again. He is given a mission to infiltrate the Na'vi, who have become a major obstacle to mining the precious ore. But a beautiful Na'vi female, Neytiri, saves Jake's life, and this changes everything. Jake is taken in by her clan, and learns to become one of them, which involves many tests and adventures. As Jake's relationship with his reluctant teacher Neytiri deepens, he learns to respect the Na'vi way and finally takes his place among them. Soon he will face the ultimate test as he leads them in an epic battle that will decide the fate of an entire world. (20th Century Fox)",
//           "thumb": "http://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg"
//           },
//       {
//           "id": 4,
//           "name": "The Incredible Hulk",
//           "rating": 5,
//           "availability": 18,
//           "review": " The Incredible Hulk kicks off an all-new, explosive and action-packed epic of one of the most popular Super Heroes of all time. In the film, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows—cut off form a life he knew and the woman he loves, Betty Ross—Banner struggles to avoid the obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally exploit his power. As all three grapple with the secrets that led to The Hulk’s creation, they are confronted with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even The Hulk’s own. (Universal Studios)",
//           "thumb": "http://upload.wikimedia.org/wikipedia/en/8/88/The_Incredible_Hulk_poster.jpg"
//           },
//     //   {
//     //       "id": 5,
//     //       "name": "X-Men",
//     //       "rating": 4,
//     //       "availability": 0,
//     //       "review": " Dr. Charles Xavier gathers children from all over the planet who were born with an added twist to their genetic code. Known as the X - factor  these children can perform extraordinary feats. Dr. Xavier calls them his X-Men.",
//     //       "thumb": "http://upload.wikimedia.org/wikipedia/en/8/8c/XMen1poster.jpg"
//     //       },
//       {
//           "id": 6,
//           "name": "RoboCop",
//           "rating": 3,
//           "availability": 6,
//           "review": " The year is 2028 and multinational conglomerate OmniCorp is at the center of robot technology. Overseas, their drones have been used by the military for years, but have been forbidden for law enforcement in America. Now OmniCorp wants to bring their controversial technology to the home front, and they see a golden opportunity to do it. When Alex Murphy (Joel Kinnaman) – a loving husband, father and good cop doing his best to stem the tide of crime and corruption in Detroit – is critically injured, OmniCorp sees their chance to build a part-man, part-robot police officer. OmniCorp envisions a RoboCop in every city and even more billions for their shareholders, but they never counted on one thing: there is still a man inside the machine.",
//           "thumb": "http://upload.wikimedia.org/wikipedia/en/b/b1/Robocop_poster.jpg"
//           },
//       {
//           "id": 7,
//           "name": "Godzilla (I)",
//           "rating": 3,
//           "availability": 2,
//           "review": " Godzilla does Manhattan in this variation on the Japanese A-bomb monster movie classic.",
//           "thumb": "http://upload.wikimedia.org/wikipedia/en/2/2e/Godzilla_%281998_Movie_Poster%29.jpg"
//           },
//       {
//           "id": 8,
//           "name": "Hollow Man",
//           "rating": 3,
//           "availability": 6,
//           "review": " A government scientist (Bacon) discovers how to make people invisible. After a freak accident that makes him slowly disappear, he begins to go insane and seeks revenge on the other scientists on the project.",
//           "thumb": "http://upload.wikimedia.org/wikipedia/en/e/e1/Poster_Hollow_Man.jpg"
//           }
//       ]


//    }


constructor(
    private movieService:MovieServiceService
  ) { } 


  ngOnInit() {
    this.movieService.getmovieList().subscribe(
         respone => {
            console.log(respone);
            this.movies = respone;
          }
    )

  }

}
