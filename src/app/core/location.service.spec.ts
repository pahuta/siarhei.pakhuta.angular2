import { LocationService } from './location.service';
import { LoggerService } from './logger.service';

describe('Location service test', () => {
    let locationService: LocationService;

    it('Test getPosition()', () => {
        locationService = new LocationService(new LoggerService());
        locationService.getPosition().subscribe(
            position => {
                expect(position.lat).toBeDefined();
                expect(position.lng).toBeDefined();
            }
        );
    });
});