class Node {
  static file = Deno.openSync('./src/data/nodes.dat', {
    read: true,
    write: true,
    create: true
  })
  static instances: Map<number, Node> = new Map();
  static bytes = 9;
  raw = new Uint8Array(Node.bytes);
  buffer = this.raw.buffer;
  private dv = new DataView(this.buffer);
  constructor(id: number) {
    Node.file.seekSync(id, Deno.SeekMode.Start);
    Node.file.readSync(this.raw);
  }
  static lookup(id: number): Node {
    if(Node.instances.has(id)) return Node.instances.get(id)!;
    return new Node(id);
  }
  get inUse(): boolean {
    return Boolean(this.dv.getUint8(0));
  }
  get relations(): Relation[] {

  }
}

class Relation {
  static file = Deno.openSync('./src/data/relations.dat', {
    read: true,
    write: true,
    create: true
  })
  static instances: Map<number, Node> = new Map();
  static bytes = 33;
  raw = new Uint8Array(Relation.bytes);
  buffer = this.raw.buffer;
  private dv = new DataView(this.buffer);
  constructor(id: number) {
    Relation.file.seekSync(id, Deno.SeekMode.Start);
    Relation.file.readSync(this.raw);
  }
  get inUse(): boolean {
    return Boolean(this.dv.getUint8(0));
  }
  get firstNode() {
    return Node.lookup(this.dv.getUint32(1));
  }
  get secondNode() {
    return Node.lookup(this.dv.getUint32(5));
  }
}

