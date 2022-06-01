export interface IFilm{
  nome: string;
  lancamento: string;
  duracao: string;
  classificacao: number;
  cartaz: string;
  genero: string[];
  pagina?: string;
  favorito: boolean;
}
