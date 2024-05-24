interface NamedObject {
    name: string;
}

interface IdObject {
    id: number;
}

export default class ArrayUtils {
    static filterByName<T extends NamedObject>(array: T[], term: string): T[] {
        return array.filter(item => this.containIgnoreCase(item.name, term));
    }

    static removeByName<T extends NamedObject>(array: T[], term: string): T[] {
        return array.filter(item => !this.containIgnoreCase(item.name, term));
    }

    static containIgnoreCase(str: string, term: string): boolean {
        return str.toLowerCase().includes(term.toLowerCase());
    }

    static filterByIdArray<T extends IdObject>(array: T[], term: number[]): T[] {
        return array.filter(item => term.includes(item.id));
    }
}
