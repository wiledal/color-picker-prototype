import styles from "./ColorPicker.module.scss";
import { Input } from "@/components/common/input/Input";
import { Button } from "@/components/common/button/Button";
import { useFormWithZod } from "@/lib/use-form-with-zod/use-form-with-zod";
import { z } from "zod";
import { getRandomColor } from "@/lib/color/get-random-color";
import { DicesIcon, PaletteIcon } from "lucide-react";
import { NativePickerInput } from "@/components/native-picker-input/NativePickerInput";

interface ColorPickerProps {
  onChange?: (color: string) => void;
}

/**
 * Multifunctional Color Picker
 * Allows you to pick colors using three different methods.
 * 1. Using the input field (and pressing enter)
 * 2. Using a native color picker
 * 3. Randomizing a color from a fixed set of colors
 *
 * A bit unconventional to use a form here, since this is technically an "input",
 * but it's a good way to get validation, and since one of the requirements was
 * that the change event should happen on "enter key", we get that natively from
 * the form submit.
 */
export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  const form = useFormWithZod({
    defaultValues: {
      color: "#ff00ff",
    },
    schema: z.object({
      color: z
        .string()
        .regex(/^#[0-9a-f]{6}$/i, "Not a valid 6-char hex code, e.g. #ff00ff"),
    }),
    reValidateMode: "onChange",
    mode: "all",
  });

  const handleSubmit = form.handleSubmit((data) => {
    onChange?.(data.color);
  });

  const handleClickRandomize = () => {
    const { hex } = getRandomColor();
    form.setValue("color", hex);
    onChange?.(hex);
  };

  const handlePickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue("color", event.target.value);
    form.setError("color", {});
    onChange?.(event.target.value);
  };

  const {
    formState: { errors },
  } = form;

  return (
    <form className={styles.colorPicker} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <Input
          label="Select color"
          type="text"
          help={`Please enter a 6-char hex code, e.g. "#ff00ff"`}
          error={errors.color?.message}
          {...form.register("color")}
        />
        <NativePickerInput
          className={styles.nativePicker}
          value={form.getValues().color}
          onInput={handlePickerChange}
        />
      </div>
      <Button
        label={
          <>
            <DicesIcon /> Randomize color
          </>
        }
        type="button"
        variant="rainbow"
        onClick={handleClickRandomize}
      />
    </form>
  );
};
