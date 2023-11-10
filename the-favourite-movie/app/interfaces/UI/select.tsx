interface IOptions {
    id: number,
    name: string
}
interface ISelect {
    label?: string,
    title: string,
    options: IOptions;
}