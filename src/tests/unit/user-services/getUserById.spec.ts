import GetUserByIdService from '../../../api/users/services/getUserById.service';

describe('GetUserByIdService service', () => {
  it('execute returns the correct output in case user was found', async () => {
    // Arrange

    const getUserByIdService = new GetUserByIdService();

    // Act

    const userResult = await getUserByIdService.execute({ userId: 1 });

    // Assert

    const expected = {
      success: true,
      data: {
        id: 1,
        username: 'john_doe',
      },
    };

    expect(userResult).toEqual(expected);
  });

  it('execute returns the correct output in case user was not found', async () => {
    // Arrange

    const getUserByIdService = new GetUserByIdService();

    // Act

    const userResult = await getUserByIdService.execute({ userId: 5 });

    // Assert

    const expected = {
      success: false,
      data: undefined,
    };

    expect(userResult).toEqual(expected);
  });
});
