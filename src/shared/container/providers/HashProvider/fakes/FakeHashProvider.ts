import { HashProviderImplementation } from '@shared/container/providers/HashProvider/models/HashProvideImplementation';

class FakeHashProvider implements HashProviderImplementation {
  public async generateHash(payload: string): Promise<string> {
    return payload;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}

export default FakeHashProvider;
