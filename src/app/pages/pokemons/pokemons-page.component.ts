import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core'
import { PokemonListSkeletonComponent } from '@app/pokemons/components/pokemon-list-skeleton/pokemon-list-skeleton.component'
import { PokemonListComponent } from '@app/pokemons/components/pokemon-list/pokemon-list.component'
import { ISimplePokemon } from '@app/pokemons/interfaces/simple-pokemon.interface'
import { PokemonsService } from '@app/pokemons/services/pokemons.service'

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit {
  private pokemonsService = inject(PokemonsService)
  public pokemons = signal<ISimplePokemon[]>([])
  // public isLoading = signal(true)

  // private appRef = inject(ApplicationRef)

  // private $appStable = this.appRef.isStable.subscribe((isStable) => {
  //   console.log({ isStable })
  // })

  loadPokemons(page = 0): void {
    this.pokemonsService.loadPage(page).subscribe(this.pokemons.set)
  }

  ngOnInit(): void {
    this.loadPokemons()
    // setTimeout(() => {
    //   this.isLoading.set(false)
    // }, 5000)
  }

  // ngOnDestroy(): void {
  //   console.log('PokemonsPageComponent destroyed')
  //   this.$appStable.unsubscribe()
  // }
}
