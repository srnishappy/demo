import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const FormInput = ({ name }) => {
  console.log(name);

  return (
    <div className="mb-2">
      <Label htmlFor="fistName">Fist Name</Label>
      <Input name="firstName" type="text" />
    </div>
  );
};
export default FormInput;
