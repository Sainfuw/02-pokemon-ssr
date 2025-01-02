import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IPokemonInfo } from '@app/pokemons/interfaces/pokemon-info.interface'
import { ISimplePokemon } from '@app/pokemons/interfaces/simple-pokemon.interface'
import { PokemonsService } from '@app/pokemons/services/pokemons.service'

@Component({
  selector: 'pokemon-page',
  imports: [],
  templateUrl: './pokemon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private pokemonService = inject(PokemonsService)

  simplePokemon = input.required<ISimplePokemon>()
  pokemon = signal<IPokemonInfo | null>(null)

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (!id) return

    this.pokemonService.getPokemon(id).subscribe(this.pokemon.set)
  }
}
