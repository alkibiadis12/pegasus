import { createSchema } from '../schema/createSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CircularProgress from '@mui/material/CircularProgress';
import { BoxCenter } from '../components/styledReusableComponents';
import TextField from '@mui/material/TextField';

function Page2() {
  const arr = [1, 2, 3];
  const schemaArr = arr.map((_, index) => {
    return createSchema(index);
  });

  let schemaObj = {};
  schemaArr.forEach(el => {
    schemaObj = { ...schemaObj, ...el };
  });

  const schema = yup.object(schemaObj).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  let content;
  if (schema === undefined) {
    content = (
      <BoxCenter>
        <CircularProgress />
      </BoxCenter>
    );
  }
  if (schema) {
    content = (
      <form onSubmit={handleSubmit(onSubmit)}>
        {arr.map((a, index) => {
          return (
            <div key={`page2Form${index}`}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                {...register(`firstName${index}`, { required: true })}
              />
              <p>{errors[`firstName${index}`]?.message}</p>

              <TextField
                id="outlined-basic"
                label="lastName"
                variant="outlined"
                {...register(`lastName${index}`, { required: true })}
              />
              <p>{errors[`lastName${index}`]?.message}</p>

              <TextField
                id="outlined-basic"
                label="email"
                variant="outlined"
                {...register(`email${index}`, {
                  required: `${index === 0 ? true : false}`,
                })}
              />
              <p>{errors[`email${index}`]?.message}</p>

              <TextField
                id="outlined-basic"
                label="phoneNumber"
                variant="outlined"
                {...register(`phoneNumber${index}`, {
                  required: `${index === 0 ? true : false}`,
                })}
              />
              <p>{errors[`phoneNumber${index}`]?.message}</p>
            </div>
          );
        })}
        <button type="submit">here</button>
      </form>
    );
  }

  return (
    <div>
      <h1>Στοιχεία Επιβατών</h1>
      {content}
    </div>
  );
}

export default Page2;
