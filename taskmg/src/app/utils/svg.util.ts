import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('wuliu', ds.bypassSecurityTrustResourceUrl('assets/物流.svg'));
}