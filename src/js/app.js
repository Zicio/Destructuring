export default function destruct(character) {
  const arr = [];
  for (const { description = 'Описание недоступно', ...other } of character.special) {
    arr.push({ description, ...other });
  }
  return arr;
}
