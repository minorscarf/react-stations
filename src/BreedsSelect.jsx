// @ts-check
/**
 *@param {{ breeds: string[], selectedBreed: string, onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void }} props
 */

export const BreedsSelect = ({breeds, selectedBreed, onChange}) => {

  return(
    <select value={selectedBreed} onChange={onChange}>
      <option value="">犬種を選ぶ</option>
      {Object.keys(breeds).map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  );
}

export default BreedsSelect
