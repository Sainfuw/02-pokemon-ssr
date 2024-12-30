import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { PokemonListSkeletonComponent } from '@src/app/pokemons/components/pokemon-list-skeleton/pokemon-list-skeleton.component'
import { PokemonListComponent } from '@src/app/pokemons/components/pokemon-list/pokemon-list.component'

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit {
  ngOnInit(): void {}
}
