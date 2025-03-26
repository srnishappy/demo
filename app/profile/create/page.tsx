import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const createProfileAction = async (formData: FormData) => {
  'use server';
  const fistName = formData.get('firstName') as string;
  console.log(fistName);
};
const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb capitalize">new user</h1>
      <div>
        <form action={createProfileAction}>
          <div className="mb-2">
            <Label htmlFor="fistName">Fist Name</Label>
            <Input name="firstName" type="text" />
          </div>
          <Button type="submit" size="lg">
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
};
export default CreateProfile;
