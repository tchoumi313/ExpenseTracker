import { Box, Button, Paper, Stack, Text, TextInput } from "@mantine/core";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axios";

const expenseSchema = yup.object().shape({
  name: yup
    .string()
    .required("Enter your title")
    .min(3, "Title must be at least 3 characters"),
  amount: yup
    .number()
    .required("Enter your amount")
    .min(1, "Amount must be at least 1 dollar"),
});

const limitSchema = yup.object().shape({
  limit: yup
    .number("Enter a valid number")
    .typeError("Limit must be a number")
    .required("Enter your limit")
    .min(1000, "Limit must be at least 1000 rupees"),
});

export default function FloatingForm({ onClose }) {
  const option = useSelector((store) => store.edit.name);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(option === "limit" ? limitSchema : expenseSchema),
  });

 const onSubmit = async (data) => {
   let res;
   try {
     if (option === "limit") {
       res = await axiosInstance.patch("/api/expense/limit", data, {
         withCredentials: true,
       });
     } else {
       res = await axiosInstance.post("/api/expense/create", data, {
         withCredentials: true,
       });
     }
     console.log(res, "from onsubmti flotting form");
     toast.success(res.data.message);
     onClose();
   } catch (err) {
     console.log(err, "from onsubmti flotting form");
     toast.error(err.response.data.message);
   }
 };

  return (
    <Box m={"md"}>
      <Text size="xl" fw={600} mb={10} c="blue" ta={"center"}>
        {option === "limit" ? "Edit Limit" : " Expense"}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          {option === "limit" ? (
            <>
              <TextInput
                label="limit"
                placeholder=" limit"
                radius="xl"
                mb="sm"
                {...register("limit")}
                error={errors.limit && errors.limit.message}
              />
            </>
          ) : (
            <>
              <TextInput
                label="title"
                placeholder=" title"
                radius="xl"
                mb="sm"
                {...register("name")}
                error={errors.name && errors.name.message}
              />
              <TextInput
                label="amount"
                placeholder=" amount"
                radius="xl"
                mb="sm"
                {...register("amount")}
                error={errors.amount && errors.amount.message}
              />
            </>
          )}
        </Stack>
        <Button mt="md" radius="xl" type="submit">
          Add
        </Button>
      </form>
    </Box>
    // </Paper>
  );
}
