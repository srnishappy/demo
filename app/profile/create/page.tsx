import { Button } from '@/components/ui/button';
import FormInput from '@/components/ui/form/FormInput';

const createProfileAction = async (formData: FormData) => {
  'use server';
  const firstName = formData.get('firstName') as string;
  console.log(firstName);
};
const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb capitalize">new user</h1>
      <div>
        <form action={createProfileAction}>
          <FormInput name="firstName" />
          <Button type="submit" size="lg">
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
};
export default CreateProfile;
