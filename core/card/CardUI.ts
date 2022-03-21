interface OptionsCardConfig{
  gradient?:boolean,
  color?:string,
  glow?:boolean
}

export default class OptionsCard implements OptionsCardConfig{
  gradient?:boolean
  color?:string
  glow?:boolean
  constructor(args:OptionsCardConfig){
    this.gradient=args.gradient
    this.color=args.color
    this.glow=args.glow
  }
}