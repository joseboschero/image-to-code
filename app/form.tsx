"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Form({
  transformUrlToCode,
}: {
  transformUrlToCode: (url: string) => void;
}) {
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(evt) => {
        evt.preventDefault();

        const form = evt.currentTarget as HTMLFormElement;
        const url = form.elements.namedItem("url") as HTMLInputElement;

        transformUrlToCode(url.value);
      }}
    >
      <Label htmlFor="url">Paste image URL: </Label>
      <Input
        name="url"
        id="url"
        type="url"
        placeholder="https://www.istockphoto.com/dolphin.png"
      ></Input>
      <Button>Convert</Button>
    </form>
  );
}
