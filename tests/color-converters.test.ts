
import {
  oklchToHSL,
  hslToOklch,
  oklchToHexString,
} from '../src/utils/color-converters.js';
import { describe, expect, it } from 'vitest';

describe('hslToOklch', () => {
  it('hslToOklch-hsl(141 72% 42%)', () => {
    expect(hslToOklch('hsl(141 72% 42%)')).toEqual({
      oklch_slice: [0.6862769866831823, 0.1855720844246142, 148.95704619121125],
      oklch_string: '68.63% 0.19 148.96',
    });
  });
  it('hslToOklch-141 72% 42%', () => {
    expect(hslToOklch('141 72% 42%')).toEqual({
      oklch_slice: [0.6862769866831823, 0.1855720844246142, 148.95704619121125],
      oklch_string: '68.63% 0.19 148.96',
    });
  });
  it('hslToOklch-hsl(141, 72%, 42%)', () => {
    expect(hslToOklch('hsl(141, 72%, 42%)')).toEqual({
      oklch_slice: [0.6862769866831823, 0.1855720844246142, 148.95704619121125],
      oklch_string: '68.63% 0.19 148.96',
    });
  });
  // all invalide an should retun default values
  it('invalid-hslToOklch-hsl(141, 72%, )', () => {
    expect(hslToOklch('hsl(141, 72%, )')).toEqual({
      oklch_slice: [0, 0, 0],
      oklch_string: '0% 0 0',
    });
  })
  it('invalid-hslToOklch-hsl(141, 72%', () => {
    expect(hslToOklch('hsl(141, 72%')).toEqual({
      oklch_slice: [0, 0, 0],
      oklch_string: '0% 0 0',
    });
  })
  it('invalid-hslToOklch-hsl(invalid)', () => {
    expect(hslToOklch('hsl(141, 72%')).toEqual({
      oklch_slice: [0, 0, 0],
      oklch_string: '0% 0 0',
    });
  })

});
describe('oklchToHSL', () => {
  it('valid-oklchToHSL-oklch(64.8% 0.150 160)', () => {
    expect(oklchToHSL('oklch(64.8% 0.150 160)')).toEqual({
      hsl_slice: [159.05325443786984, 1, 0.33137254901960783, 1],
      hsl_string: 'hsl(159.05, 100.00%, 33.14%)',
    });
  });
  // ignores the alpha value because our daisyui doesn't support it
  it('valid-oklchToHSL-64.8% 0.150 160', () => {
    expect(oklchToHSL('64.8% 0.150 160')).toEqual({
      hsl_slice: [159.05325443786984, 1, 0.33137254901960783, 1],
      hsl_string: 'hsl(159.05, 100.00%, 33.14%)',
    });
  });
  it('invalid-oklchToHSL-oklch(64.8% 0.150 160)', () => {
    expect(oklchToHSL('oklch(64.8%, 0.150, 160)')).toEqual({
      hsl_slice: [0, 0, 0],
      hsl_string: 'hsl(0, 0%, 0%)',
    });
  });
  it('invalid-oklchToHSL-oklch()', () => {
    expect(oklchToHSL('oklch()')).toEqual({
      hsl_slice: [0, 0, 0],
      hsl_string: 'hsl(0, 0%, 0%)',
    });
  });
  it('invalid-oklchToHSL-empty-string', () => {
    expect(oklchToHSL('')).toEqual({
      hsl_slice: [0, 0, 0],
      hsl_string: 'hsl(0, 0%, 0%)',
    });
  });

  it('invalid-oklchToHSL-oklch(64.8% 0.150 160 /78%)', () => {
    expect(oklchToHSL('oklch(64.8%, 0.150, 160)')).toEqual({
      hsl_slice: [0, 0, 0],
      hsl_string: 'hsl(0, 0%, 0%)',
    });
  });

  it('oklchToHSL with invalid input', () => {
    expect(oklchToHSL('invalid')).toEqual({
      hsl_slice: [0, 0, 0],
      hsl_string: 'hsl(0, 0%, 0%)',
    });
  });
});

describe('oklchToHexString',()=>{
  it('oklchToHexString-oklch(64.8% 0.150 160)', () => {
    expect(oklchToHexString('oklch(64.8% 0.150 160)')).toEqual('#00a96e');
  });
  it('oklchToHexString-64.8% 0.150 160', () => {
    expect(oklchToHexString('64.8% 0.150 160')).toEqual('#00a96e');
  });
  // invalid and will return default vlue of #000000
  it('oklchToHexString-oklch(64.8%, 0.150, 160)', () => {
    expect(oklchToHexString('oklch(64.8%, 0.150, 160)')).toEqual('#000000');
  });
  it('oklchToHexString-oklch(invalid)', () => {
    expect(oklchToHexString('oklch(invalid)')).toEqual('#000000');
  });
  it('oklchToHexString-invalid', () => {
    expect(oklchToHexString('invalid')).toEqual('#000000');
  });

});


