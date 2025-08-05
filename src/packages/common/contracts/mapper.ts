export abstract class Mapper<INPUT, OUTPUT> {
  abstract transform(remote: INPUT): OUTPUT;
}
