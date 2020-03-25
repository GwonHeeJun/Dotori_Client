export type historyType = {
    go: Function;
    length: Number;
    action: String;
    location: {
        pathname: String;
        search: String;
        hash: String;
        state?: String;
        key: String;
    }
}
