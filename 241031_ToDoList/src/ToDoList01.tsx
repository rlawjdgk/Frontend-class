import { useForm } from "react-hook-form";
import styled from "styled-components";
const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 100px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
interface Form {
  email: string;
  FirstName: string;
  LastName: string;
  UserName: string;
  Password: string;
  Password2: string;
  extraError?: string;
}
const ToDoList = () => {
  // const [toDoError, setToDoError] = useState("");
  // const [toDo, setToDo] = useState("");
  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (toDo.length < 10) {
  //     return setToDoError("To do should be longer...");
  //   }
  // }; // 전체 form event 제어
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = e;
  //   setToDoError(value);
  //   setToDo(value);
  // }; // 자식요소들의 변화
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<Form>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  // console.log(register("toDo"));
  const onVaild = (data: Form) => {
    if (data.Password !== data.Password2) {
      setError(
        "Password2",
        { message: "Password is not the same.." },
        {
          shouldFocus: true,
        }
      );
    }
    setValue("UserName", "");
    // setError("extraError", { message: "Now Loading" });
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onVaild)}>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/g,
              message: "Only naver.com email is allowed",
            },
          })}
          type="text"
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("FirstName", {
            required: "Write Here",
            validate: (value) =>
              !value.includes("test") ? "No test allowed" : true,
          })}
          type="text"
          placeholder="FirsName"
        />
        <span>{errors?.FirstName?.message as string}</span>
        <input
          {...register("LastName", { required: true })}
          type="text"
          placeholder="Last Name"
        />
        <input
          {...register("UserName", { required: true, minLength: 10 })}
          type="text"
          placeholder="User Name"
        />
        <input
          {...register("Password", {
            required: "Password is required...",
            minLength: 5,
          })}
          type="text"
          placeholder="Password"
        />
        <input
          {...register("Password2", {
            required: true,
            minLength: {
              value: 5,
              message: "Your Password is too short...",
            },
          })}
          type="text"
          placeholder="Password2"
        />
        <span>{errors?.Password2?.message as string}</span>
        <input type="submit" value={"Add"} />
        <span>{errors?.extraError?.message as string}</span>
      </Form>
    </Container>
  );
};
export default ToDoList;
