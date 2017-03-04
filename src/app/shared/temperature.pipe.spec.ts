import { TemperaturePipe } from './temperature.pipe';

describe('Temperature pipe test', () => {
    let pipe = new TemperaturePipe();

    it('Transforms "K" to "C"', () => {
        expect(pipe.transform(273.15)).toBe('0 °C');
    });

    it('Transforms "K" to "F" with precision', () => {
        expect(pipe.transform(283, 'f.2')).toBe('49.73 °F');
    });
});