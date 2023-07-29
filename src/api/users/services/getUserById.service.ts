import { User } from '../../../globals/types';

class GetUserByIdService {
  private users = [
    {
      user_id: 1,
      username: 'john_doe',
    },
    {
      user_id: 2,
      username: 'jane_doe',
    },
  ];

  execute(parameters: any) {
    try {
      const userRes = this.users.find((user: User) => parameters.userId === user.user_id);

      if (!userRes) {
        return { success: false, data: userRes };
      }

      return { success: true, data: this.formatUser(userRes) };
    } catch (exception) {
      return { sucess: false, exception };
    }
  }

  private formatUser(user: any) {
    const formattedUser = { ...user };
    formattedUser.id = formattedUser.user_id;
    delete formattedUser.user_id;
    return formattedUser;
  }
}

export default GetUserByIdService;
