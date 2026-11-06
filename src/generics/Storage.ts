export class Storage<T> {
  private items: T[] = [];

  public addItem(item: T): void {
    this.items.push(item);
  }

  public removeItem(predicate: (item: T) => boolean): boolean {
    const idx = this.items.findIndex(predicate);
    if (idx !== -1) {
      this.items.splice(idx, 1);
      return true;
    }
    return false;
  }

  public getAllItems(): T[] {
    return [...this.items];
  }
}
